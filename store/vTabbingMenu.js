export const state = () => ({
	activeTabs: {},
	changedStateMarker: false
});

export const mutations = {
	switchItem (state, {tabsGroup, activeTab}) {
		state.activeTabs[tabsGroup] = activeTab;
		state.changedStateMarker = !state.changedStateMarker;
	}
};

export const getters = {
	getActiveTab: state => ({tabsGroup, tab}) => {
		return state.activeTabs[tabsGroup] === tab;
	}
};