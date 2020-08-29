import { actions } from './actions'
import { mutations } from './mutations'

const state = {
	auth: false,
    errorLogin: '',
    errors: {},
    user: {}
};

export const user = {
	state,
	actions,
	mutations
}