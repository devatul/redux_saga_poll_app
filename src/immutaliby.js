import update from 'immutability-helper';

update.extends('$setRequestSuccess', (payload, original) => update(original, {
  data: { $set: payload },
  errors: { $set: [] },
  isSuccess: { $set: true },
  isError: { $set: false },
  isLoading: { $set: false },
}));

update.extends('$setRequestFailed', (payload, original) => update(original, {
  data: { $set: [] },
  errors: { $set: payload.data },
  isSuccess: { $set: false },
  isError: { $set: true },
  isLoading: { $set: false },
}));
