export const state = () => ({
	groups: {},
	changedStateMarker: false
});

export const mutations = {
	switchItem (state, {group, item}) {
		state.changedStateMarker = !state.changedStateMarker;
		state.groups[group] = item;
	}
};

export const getters = {
	getActiveTab: state => group => {
		return state.groups[group];
	}
};