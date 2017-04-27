import update from 'immutability-helper';

update.extend('$setRequestSuccess', (payload, original) => update(original, {
  data: { $set: payload },
  errors: { $set: [] },
  modal: { $set: {} },
  isSuccess: { $set: true },
  isError: { $set: false },
  isLoading: { $set: false },
}));
