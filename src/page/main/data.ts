// 当前登录用户
export interface CurrentUser {
  'id': string; // id
  'name': string; // 姓名
  'head': string; // 头像资源
  'accessToken': string;
  // 'langType': string; // 站点显示语言
}

// ====== 导航 ====== //
// 标签信息
export interface NavTagInfo {
  'id': string;
  'name': string; // 名称
  'url': string; // 地址
  'description': string; // 简介
  'isFavor': number; // 是否收藏
  'isSystem': number; // 是否系统标签
}

// 分类信息
export interface NavCategoryInfo {
  'id': string;
  'name': string;
  'tags': Array<NavTagInfo>;
}
