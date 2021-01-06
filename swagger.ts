const json = {
    "host": "",
    "swagger": "2.0",
    "basePath": "/",
    "info": {
        "title": "EGGJS",
        "description": "swagger-ui for WIZ.",
        "version": "1.0.0"
    },
    "schemes": [
        "http",
        "https"
    ],
    "tags": [
        {
            "name": "Home",
            "description": "注释必写，swagger-doc是根据这段注释来生成接口的"
        }
    ],
    "paths": {
        "/home": {
            "post": {
                "tags": [
                    "Home"
                ],
                "summary": "接口信息小标题 ",
                "description": "path 接口具体描述 ",
                "operationId": "controller-home-index",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/homeBaseRequest"
                        },
                        "name": "body",
                        "required": true,
                        "description": "名称 "
                    }
                ],
                "security": [],
                "responses": {
                    "200": {
                        "schema": {
                            "$ref": "#/definitions/homeResponse"
                        },
                        "description": "返回结果 "
                    }
                },
                "deprecated": false
            }
        },
        "/getName": {
            "get": {
                "tags": [
                    "Home"
                ],
                "summary": "第二个接口啦 ",
                "description": "path 接口具体描述 ",
                "operationId": "controller-home-getName",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "query",
                        "type": "number",
                        "name": "id",
                        "required": false,
                        "description": "年龄 "
                    },
                    {
                        "in": "query",
                        "type": "string",
                        "name": "name",
                        "required": false,
                        "description": "名字 "
                    }
                ],
                "security": [],
                "responses": {
                    "200": {
                        "schema": {
                            "$ref": "#/definitions/homeBaseRequest"
                        },
                        "description": ""
                    }
                },
                "deprecated": false
            }
        }
    },
    "securityDefinitions": {},
    "definitions": {
        "homeBaseRequest": {
            "type": "object",
            "required": [
                "id",
                "name"
            ],
            "properties": {
                "id": {
                    "type": "number",
                    "example": 1,
                    "enum": [
                        0,
                        1
                    ],
                    "description": "这是1个随便什么ID"
                },
                "name": {
                    "type": "string",
                    "example": "male",
                    "enum": [
                        "male",
                        "female"
                    ],
                    "description": "用户姓名"
                },
                "age": {
                    "type": "number",
                    "description": "这是什么年龄"
                },
                "info": {
                    "$ref": "#/definitions/zhouxinUser"
                },
                "infoList": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/zhouxinUser"
                    }
                }
            }
        },
        "homeResponse": {
            "type": "object",
            "required": [
                "id",
                "name",
                "sex",
                "age"
            ],
            "properties": {
                "id": {
                    "type": "number",
                    "description": "id"
                },
                "name": {
                    "type": "string",
                    "description": "用户姓名"
                },
                "sex": {
                    "type": "string",
                    "example": "male",
                    "enum": [
                        "male",
                        "female"
                    ],
                    "description": "用户性别"
                },
                "age": {
                    "type": "number",
                    "description": "年龄"
                },
                "info": {
                    "$ref": "#/definitions/zhouxinUser"
                },
                "infoList": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/zhouxinUser"
                    }
                }
            }
        },
        "zhouxinUser": {
            "type": "object",
            "required": [
                "zhouxinId",
                "zhouxinName",
                "zhouxinSex",
                "zhouxinAge"
            ],
            "properties": {
                "zhouxinId": {
                    "type": "string",
                    "description": "这个返回 ID"
                },
                "zhouxinName": {
                    "type": "string",
                    "description": "这个返回 用户姓名"
                },
                "zhouxinSex": {
                    "type": "string",
                    "description": "这个返回 用户性别"
                },
                "zhouxinAge": {
                    "type": "integer",
                    "description": "这个返回 年龄"
                }
            }
        }
    }
}

export default json;
