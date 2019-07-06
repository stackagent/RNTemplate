export const promiseConsts = {
    pending: (actionType) => `${actionType}_PENDING`,
    fulfilled: (actionType) => `${actionType}_FULFILLED`,
    rejected: (actionType) => `${actionType}_REJECTED`
}
