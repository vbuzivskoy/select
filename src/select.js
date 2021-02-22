import * as yup from 'yup';
import conditionHandlers from './conditions';

export default (selectRequest) => {
  const schema = yup.object().shape({
    data: yup.array().of(yup.object()).defined(),
    condition: yup.object()
      .shape({
        include: yup.array().of(yup.object()).notRequired(),
        exclude: yup.array().of(yup.object()).notRequired(),
        sort_by: yup.array().of(yup.string()).notRequired(),
      })
      .defined()
      .noUnknown(),
  });

  try {
    schema.validateSync(selectRequest, { strict: true });
  } catch (error) {
    throw new Error(`Incorrect input format (${error.message})`);
  }

  const result = Object.entries(selectRequest.condition)
    .reduce((currentData, [conditionType, conditionParams]) => (
      conditionHandlers[conditionType](currentData, conditionParams)
    ), selectRequest.data);

  return { result };
};
