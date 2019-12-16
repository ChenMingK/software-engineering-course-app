import axios from 'axios'

const BASE_URL = 'http://192.168.43.178:8080/v1'

// 登录
export function login (number, password, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/login`,
    data: {
      number,
      password,
      type
    }
  })
}
/**
 * 201608030367
 * 666666
 */
// 注册
export function register (username, password, number, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/register`,
    data: {
      username,
      password,
      number,
      type
    }
  })
}

// 教师上传课题
export function uploadTopics (title, content, _teacherId = 1) {
  let teacherId = localStorage.getItem('teacherId') // 先从本地存储中获取
  if (!teacherId) {
    teacherId = _teacherId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/topic`,
    data: {
      title,
      content,
      teacherId
    }
  })
}

// 获取课题
export function getTopics () {
  return axios({
    method: 'get',
    url: `${BASE_URL}/topic`
  })
}

// 获取资料
export function getResource () {
  return axios({
    method: 'get',
    url: `${BASE_URL}/file?projectId=1`
  })
}

// 创建队伍
export function createTeam (teamName, _projectId = 1, _studentId = 1) {
  let projectId = localStorage.getItem('projectId')
  let studentId = localStorage.getItem('id')
  if (!projectId) {
    projectId = _projectId
  }
  if (!studentId) {
    studentId = _studentId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/project/origination/student/${studentId}`,
    data: {
      teamName
    }
  })
}

// 获取学生信息
export function getStudentInfoByNumber (number, _teamId) {
  let teamId = localStorage.getItem('teamId')
  if (!teamId) {
    teamId = _teamId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/team/${teamId}/invitation`,
    data: {
      number
    }
  })
}

// 学生加入小组
export function studetnJoinTeam (snumber, _teamId) {
  let teamId = localStorage.getItem('teamId')
  if (!teamId) {
    teamId = _teamId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/team/${teamId}/invitation`,
    data: {
      snumber
    }
  })
}
// 将学生从小队中删除
export function deleteStudentFromTeamByNumber (studentId) {

}

// Student
// 选择课程题目
export function teamTopicSelect (_projectId, _topicId) {
  let projectId = localStorage.getItem('projectId')
  let topicId = localStorage.getItem('topicId')
  if (!projectId) {
    projectId = _projectId
  }
  if (!topicId) {
    topicId = _topicId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/project/${projectId}/submission/topic`,
    data: {
      topicId
    }
  })
}

export function getProjectInfo (_projectId) {
  let projectId = localStorage.getItem('projectId')
  if (!projectId) {
    projectId = _projectId
  }
  return axios({
    method: 'get',
    url: `${BASE_URL}/project/${projectId}`
  })
}

// 小组进度 + 1
export function postSchedule (_projectId) {
  let projectId = localStorage.getItem('projectId')
  if (!projectId) {
    projectId = _projectId
  }
  return axios({
    method: 'post',
    url: `${BASE_URL}/project/${projectId}/submission/progress`
  })
}

export function forgetPassword (number, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/forget/vcode`,
    data: {
      number,
      type
    }
  })
}

export function changePasswordWithCode (number, vcode, newPassword, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/forget/proof`,
    data: {
      number,
      vcode,
      newPassword,
      type
    }
  })
}

export function changePassword (number, oldPassword, newPassword, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/reset`,
    data: {
      number,
      password: oldPassword,
      newPassword,
      type
    }
  })
}

export function getTeamInfo (teacherId = 1) {
  return axios({
    method: 'get',
    url: `${BASE_URL}/project/query`,
    params: {
      teacherId
    }
  })
}

// 评分
export function postScore (projectId, result) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/project/${projectId}/submission/result`,
    data: {
      result
    }
  })
}

// 评语
export function postComment (projectId, review) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/project/${projectId}/submission/review`,
    data: {
      review
    }
  })
}
