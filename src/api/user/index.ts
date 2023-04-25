import request from '/@/utils/request';

/**
 *
 * 用户api接口集合
 */
export function useUserApi() {
	return {
		getUserPermission: (params?: object) => {
			return request<any, UserInfos>({
				url: '/user/get_user_permission',
				method: 'get',
				params,
			});
		},
	};
}