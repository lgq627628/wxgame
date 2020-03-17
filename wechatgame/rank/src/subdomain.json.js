module.exports = [
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb2",
      "texture": "1arm8Q+aBDf7phWSkx8hId",
      "rect": [
        0,
        0,
        56,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        56,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-spine",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-spine|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2278723298,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\n\nin vec3 a_position;\nin vec4 a_color;\n#if USE_TINT\n  in vec4 a_color0;\n#endif\n\nin vec2 a_uv0;\nout vec2 v_uv0;\n\nout vec4 v_light;\n#if USE_TINT\n  out vec4 v_dark;\n#endif\n\nvoid main () {\n  mat4 mvp;\n  \n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n\n  v_uv0 = a_uv0;\n\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n\n  gl_Position = mvp * vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nin vec2 v_uv0;\n\nin vec4 v_light;\n#if USE_TINT\n  in vec4 v_dark;\n#endif\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvoid main () {\n  vec4 texColor = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      texColor.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  vec4 finalColor;\n\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n\n  ALPHA_TEST(finalColor);\n\n  gl_FragColor = finalColor;\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\n\nattribute vec3 a_position;\nattribute vec4 a_color;\n#if USE_TINT\n  attribute vec4 a_color0;\n#endif\n\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\n\nvoid main () {\n  mat4 mvp;\n  \n  #if CC_USE_MODEL\n    mvp = cc_matViewProj * cc_matWorld;\n  #else\n    mvp = cc_matViewProj;\n  #endif\n\n  v_uv0 = a_uv0;\n\n  v_light = a_color;\n  #if USE_TINT\n    v_dark = a_color0;\n  #endif\n\n  gl_Position = mvp * vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nvarying vec2 v_uv0;\n\nvarying vec4 v_light;\n#if USE_TINT\n  varying vec4 v_dark;\n#endif\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvoid main () {\n  vec4 texColor = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      texColor.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  vec4 finalColor;\n\n  #if USE_TINT\n    finalColor.a = v_light.a * texColor.a;\n    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n  #else\n    finalColor = texColor * v_light;\n  #endif\n\n  ALPHA_TEST(finalColor);\n\n  gl_FragColor = finalColor;\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TINT",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-spine|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-gray-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-gray-sprite|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 422187938,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\nin vec3 a_position;\n\nin mediump vec2 a_uv0;\nout mediump vec2 v_uv0;\n\nin vec4 a_color;\nout vec4 v_color;\n\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nin mediump vec2 v_uv0;\nin vec4 v_color;\n\nvoid main () {\n  vec4 color = v_color * texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      color.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\n\nattribute vec3 a_position;\n\nattribute mediump vec2 a_uv0;\nvarying mediump vec2 v_uv0;\n\nattribute vec4 a_color;\nvarying vec4 v_color;\n\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}\n\n",
          "frag": "\nprecision highp float;\n\nuniform sampler2D texture;\nvarying mediump vec2 v_uv0;\nvarying vec4 v_color;\n\nvoid main () {\n  vec4 color = v_color * texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_TEXTURE\n      color.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": []
          }
        ],
        "blocks": [],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-gray-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f1",
      "texture": "a4IcDmrEFFG5xmhlqki/S5",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "icmain",
      "texture": "39zIvGycZAXLzM/xS6Qsec",
      "rect": [
        0,
        0,
        72,
        74
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        72,
        74
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bg",
      "texture": "549uDrsStK6pR52G2PcBGu",
      "rect": [
        0,
        0,
        720,
        1280
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        720,
        1280
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-2d-sprite",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-2d-sprite|vs|fs",
            "properties": {
              "texture": {
                "value": "white",
                "type": 29
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 4253554819,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\n\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n\n  v_color = a_color;\n\n  gl_Position = pos;\n}\n",
          "frag": "\nprecision highp float;\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nin vec4 v_color;\n\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n\n  #if USE_TEXTURE\n  o *= texture(texture, v_uv0);\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n\n  o *= v_color;\n\n  ALPHA_TEST(o);\n\n  gl_FragColor = o;\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\n\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n\n  v_color = a_color;\n\n  gl_Position = pos;\n}\n",
          "frag": "\nprecision highp float;\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nvarying vec4 v_color;\n\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n\nvoid main () {\n  vec4 o = vec4(1, 1, 1, 1);\n\n  #if USE_TEXTURE\n  o *= texture2D(texture, v_uv0);\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n\n  o *= v_color;\n\n  ALPHA_TEST(o);\n\n  gl_FragColor = o;\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              }
            ],
            "samplers": []
          }
        },
        "defines": [
          {
            "name": "USE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_MODEL",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
            "type": "boolean",
            "defines": [
              "USE_TEXTURE"
            ]
          }
        ],
        "blocks": [
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 0
          }
        ],
        "samplers": [
          {
            "name": "texture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-2d-sprite|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-unlit",
    "_effectAsset": {
      "__uuid__": "6dkeWRTOBGXICfYQ7JUBnG"
    },
    "_defines": {
      "USE_DIFFUSE_TEXTURE": true
    },
    "_props": {
      "diffuseTexture": {
        "__uuid__": "02delMVqdBD70a/HSD99FK"
      }
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "coin",
      "texture": "8eQsVYhatI3IX0RkbkISif",
      "rect": [
        0,
        0,
        118,
        118
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        118,
        118
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-gray-sprite",
    "_effectAsset": {
      "__uuid__": "14TDKXr2NJ6LjvHPops74o"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "1,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9728,9728,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "5",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        2,
        2,
        47,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        47,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bubble4",
      "texture": "6cTT288K1K87MSd7zCFZmh",
      "rect": [
        0,
        0,
        80,
        80
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        80,
        80
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f9",
      "texture": "ef+ukcEBZIl64eWCXIdqwY",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "zidan",
      "texture": "87+YyBQQZJBLWqfpVCLJ6v",
      "rect": [
        0,
        0,
        46,
        161
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        46,
        161
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bubble1",
      "texture": "44MmqcrXBPVagB2zAueYgL",
      "rect": [
        0,
        0,
        80,
        80
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        80,
        80
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "knife",
      "texture": "c1iQ5EO9hCCYdl1yFS0EuJ",
      "rect": [
        0,
        0,
        40,
        240
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        240
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-unlit",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-unlit|unlit-vs|unlit-fs",
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 408530468,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\n#if CC_USE_SKINNING\n\n  in vec4 a_weights;\n  in vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform SKINNING {\n      vec2 cc_jointsTextureSize;\n    }\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform CC_JOINT_MATRIX {\n      mat4 cc_jointMatrices[50];\n    }\n\n    mat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform MAIN_TILING {\n  vec2 mainTiling;\n  vec2 mainOffset;\n}\n\nin vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 a_uv0;\n  out mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 a_color;\n  out lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform DIFFUSE {\n  lowp vec4 diffuseColor;\n};\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matWorld;\nuniform mat4 cc_matViewProj;\n\n#if CC_USE_SKINNING\n\n  attribute vec4 a_weights;\n  attribute vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform vec2 cc_jointsTextureSize;\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform mat4 cc_jointMatrices[50];\nmat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform vec2 mainTiling;\nuniform vec2 mainOffset;\nattribute vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  attribute mediump vec2 a_uv0;\n  varying mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  attribute lowp vec4 a_color;\n  varying lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform lowp vec4 diffuseColor;\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              },
              {
                "name": "CC_JOINT_MATRIX",
                "defines": [
                  "CC_USE_SKINNING"
                ]
              }
            ],
            "samplers": [
              {
                "name": "cc_jointsTexture",
                "defines": [
                  "CC_USE_SKINNING",
                  "CC_USE_JOINTS_TEXTRUE"
                ]
              }
            ]
          }
        },
        "defines": [
          {
            "name": "CC_USE_SKINNING",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_JOINTS_TEXTRUE",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING"
            ]
          },
          {
            "name": "CC_JOINTS_TEXTURE_FLOAT32",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ]
          },
          {
            "name": "CC_USE_ATTRIBUTE_UV0",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_DIFFUSE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_COLOR",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE",
            "type": "boolean",
            "defines": [
              "USE_DIFFUSE_TEXTURE",
              "CC_USE_ATTRIBUTE_UV0"
            ]
          }
        ],
        "blocks": [
          {
            "name": "SKINNING",
            "members": [
              {
                "name": "cc_jointsTextureSize",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 0
          },
          {
            "name": "MAIN_TILING",
            "members": [
              {
                "name": "mainTiling",
                "type": 14,
                "count": 1
              },
              {
                "name": "mainOffset",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          },
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 2
          },
          {
            "name": "DIFFUSE",
            "members": [
              {
                "name": "diffuseColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 3
          }
        ],
        "samplers": [
          {
            "name": "diffuseTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_DIFFUSE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-unlit|unlit-vs|unlit-fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-base",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "2",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        50,
        50,
        46,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        46,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "Jishen_W5",
      "texture": "eb0i4i6PRGH6Fbg7NK3ytf",
      "rect": [
        0,
        0,
        126,
        131
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        126,
        131
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-unlit-transparent",
    "techniques": [
      {
        "stages": [
          "transparent"
        ],
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-unlit-transparent|unlit-vs|unlit-fs",
            "depthStencilState": {
              "depthTest": true,
              "depthWrite": true
            },
            "properties": {
              "diffuseTexture": {
                "value": "white",
                "type": 29
              },
              "diffuseColor": {
                "value": [
                  1,
                  1,
                  1,
                  1
                ],
                "inspector": {
                  "type": "color"
                },
                "type": 16
              },
              "alphaThreshold": {
                "value": [
                  0.5
                ],
                "type": 13
              },
              "mainTiling": {
                "value": [
                  1,
                  1
                ],
                "type": 14
              },
              "mainOffset": {
                "value": [
                  0,
                  0
                ],
                "type": 14
              }
            }
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 408530468,
        "glsl3": {
          "vert": "\nprecision highp float;\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nuniform CCGlobal {\n  vec4 cc_time;\n\n  vec4 cc_screenSize;\n\n  vec4 cc_screenScale;\n\n  vec4 cc_nativeSize;\n\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n\n  vec4 cc_exposure;\n\n  vec4 cc_mainLitDir;\n\n  vec4 cc_mainLitColor;\n\n  vec4 cc_ambientSky;\n  vec4 cc_ambientGround;\n};\n\n#if CC_USE_SKINNING\n\n  in vec4 a_weights;\n  in vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform SKINNING {\n      vec2 cc_jointsTextureSize;\n    }\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform CC_JOINT_MATRIX {\n      mat4 cc_jointMatrices[50];\n    }\n\n    mat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform MAIN_TILING {\n  vec2 mainTiling;\n  vec2 mainOffset;\n}\n\nin vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 a_uv0;\n  out mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 a_color;\n  out lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  }\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform DIFFUSE {\n  lowp vec4 diffuseColor;\n};\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  in lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  in mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\nuniform mat4 cc_matWorld;\nuniform mat4 cc_matViewProj;\n\n#if CC_USE_SKINNING\n\n  attribute vec4 a_weights;\n  attribute vec4 a_joints;\n\n  #if CC_USE_JOINTS_TEXTRUE\n    uniform vec2 cc_jointsTextureSize;\n    uniform sampler2D cc_jointsTexture;\n\n    #if CC_JOINTS_TEXTURE_FLOAT32\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 4.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y));\n        vec4 v2 = texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y));\n        vec4 v3 = texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y));\n        vec4 v4 = texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y));\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #else\n      float decode32(vec4 rgba) {\n        float Sign = 1.0 - step(128.0, rgba[0]) * 2.0;\n        float Exponent = 2.0 * mod(rgba[0], 128.0) + step(128.0, rgba[1]) - 127.0;\n        float Mantissa = mod(rgba[1], 128.0) * 65536.0 + rgba[2] * 256.0 + rgba[3] + 8388608.0;\n        return Sign * exp2(Exponent - 23.0) * Mantissa;\n      }\n      vec4 decodevec4 (vec4 x, vec4 y, vec4 z, vec4 w) {\n\n        return vec4(\n          decode32(x.wzyx * 255.0),\n          decode32(y.wzyx * 255.0),\n          decode32(z.wzyx * 255.0),\n          decode32(w.wzyx * 255.0)\n        );\n      }\n\n      vec4 decodevec4 (float dx, float x, float y) {\n        return decodevec4(\n          texture2D(cc_jointsTexture, vec2(dx * (x + 0.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 1.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 2.5), y)),\n          texture2D(cc_jointsTexture, vec2(dx * (x + 3.5), y))\n        );\n      }\n\n      mat4 getBoneMatrix(const in float i) {\n        float width = cc_jointsTextureSize.x;\n        float height = cc_jointsTextureSize.y;\n        float j = i * 16.0;\n        float x = mod(j, width);\n        float y = floor(j / width);\n\n        float dx = 1.0 / width;\n        float dy = 1.0 / height;\n\n        y = dy * (y + 0.5);\n\n        vec4 v1 = decodevec4(dx, x,       y);\n        vec4 v2 = decodevec4(dx, x+4.0,   y);\n        vec4 v3 = decodevec4(dx, x+8.0,   y);\n        vec4 v4 = decodevec4(dx, x+12.0,  y);\n\n        return mat4(v1, v2, v3, v4);\n      }\n    #endif\n  #else\n    uniform mat4 cc_jointMatrices[50];\nmat4 getBoneMatrix(const in float i) {\n      return cc_jointMatrices[int(i)];\n    }\n  #endif\n\n    mat4 skinMatrix() {\n      return\n        getBoneMatrix(a_joints.x) * a_weights.x +\n        getBoneMatrix(a_joints.y) * a_weights.y +\n        getBoneMatrix(a_joints.z) * a_weights.z +\n        getBoneMatrix(a_joints.w) * a_weights.w\n        ;\n    }\n#endif\n\nvoid SKIN_VERTEX(inout vec4 a1) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n  #endif\n}\n\nvoid SKIN_VERTEX(inout vec4 a1, inout vec4 a2, inout vec4 a3) {\n  #if CC_USE_SKINNING\n    mat4 m = skinMatrix();\n    a1 = m * a1;\n    a2 = m * a2;\n    a3 = m * a3;\n  #endif\n}\n\nuniform vec2 mainTiling;\nuniform vec2 mainOffset;\nattribute vec3 a_position;\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  attribute mediump vec2 a_uv0;\n  varying mediump vec2 v_uv0;\n#endif\n\n#if CC_USE_ATTRIBUTE_COLOR\n  attribute lowp vec4 a_color;\n  varying lowp vec4 v_color;\n#endif\n\nvoid main () {\n  vec4 position = vec4(a_position, 1);\n\n  SKIN_VERTEX(position);\n  \n  #if CC_USE_ATTRIBUTE_COLOR\n      v_color = a_color;\n  #endif\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n      v_uv0 = a_uv0 * mainTiling + mainOffset;\n  #endif\n\n  gl_Position = cc_matViewProj * cc_matWorld * position;\n}\n",
          "frag": "\nprecision highp float;\n\nvec3 gammaToLinearSpaceRGB(in vec3 sRGB) {\n\n  return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n}\n\nvec3 linearToGammaSpaceRGB(in vec3 RGB) {\n\n  vec3 S1 = sqrt(RGB);\n  vec3 S2 = sqrt(S1);\n  vec3 S3 = sqrt(S2);\n  return 0.585122381 * S1 + 0.783140355 * S2 - 0.368262736 * S3;\n}\n\nvec4 gammaToLinearSpaceRGBA(in vec4 sRGBA) {\n  return vec4(gammaToLinearSpaceRGB(sRGBA.rgb), sRGBA.a);\n}\n\nvec4 linearToGammaSpaceRGBA(in vec4 RGBA) {\n  return vec4(linearToGammaSpaceRGB(RGBA.rgb), RGBA.a);\n}\n\nvec4 linearToLinear (in vec4 value) {\n  return value;\n}\n\n#if USE_ALPHA_TEST\n  \n  uniform float alphaThreshold;\n#endif\n\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\n\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\n\nuniform lowp vec4 diffuseColor;\n\n#if USE_DIFFUSE_TEXTURE\n  uniform sampler2D diffuseTexture;\n#endif\n\nvoid MULTIPLY_DIFFUSE_TEXTRUE_COLOR (inout vec4 color, in vec2 uv) {\n  #if USE_DIFFUSE_TEXTURE && CC_USE_ATTRIBUTE_UV0\n    vec4 diffuseTextureColor = texture2D(diffuseTexture, uv);\n    #if CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE\n      diffuseTextureColor.a *= texture2D(diffuseTexture, uv + vec2(0, 0.5)).r;\n    #endif\n    color *= linearToLinear(diffuseTextureColor);\n  #endif\n}\n\nvoid CALC_DIFFUSE (inout vec4 color, in vec2 uv) {\n  color *= diffuseColor;\n  MULTIPLY_DIFFUSE_TEXTRUE_COLOR(color, uv);\n}\n\nvoid CALC_DIFFUSE (inout vec4 color) {\n  color *= diffuseColor;\n}\n\n#if CC_USE_ATTRIBUTE_COLOR\n  varying lowp vec4 v_color;\n#endif\n\n#if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n  varying mediump vec2 v_uv0;\n#endif\n\nvoid main () {\n  vec4 color = vec4(1, 1, 1, 1);\n\n  #if CC_USE_ATTRIBUTE_UV0 && USE_DIFFUSE_TEXTURE\n    CALC_DIFFUSE(color, v_uv0);\n  #else \n    CALC_DIFFUSE(color);\n  #endif\n\n  #if CC_USE_ATTRIBUTE_COLOR\n    color *= v_color;\n  #endif\n\n  ALPHA_TEST(color);\n\n  gl_FragColor = linearToLinear( color );\n}\n"
        },
        "builtins": {
          "globals": {
            "blocks": [
              {
                "name": "CCGlobal",
                "defines": []
              }
            ],
            "samplers": []
          },
          "locals": {
            "blocks": [
              {
                "name": "CCLocal",
                "defines": []
              },
              {
                "name": "CC_JOINT_MATRIX",
                "defines": [
                  "CC_USE_SKINNING"
                ]
              }
            ],
            "samplers": [
              {
                "name": "cc_jointsTexture",
                "defines": [
                  "CC_USE_SKINNING",
                  "CC_USE_JOINTS_TEXTRUE"
                ]
              }
            ]
          }
        },
        "defines": [
          {
            "name": "CC_USE_SKINNING",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_JOINTS_TEXTRUE",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING"
            ]
          },
          {
            "name": "CC_JOINTS_TEXTURE_FLOAT32",
            "type": "boolean",
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ]
          },
          {
            "name": "CC_USE_ATTRIBUTE_UV0",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_DIFFUSE_TEXTURE",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ATTRIBUTE_COLOR",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "USE_ALPHA_TEST",
            "type": "boolean",
            "defines": []
          },
          {
            "name": "CC_USE_ALPHA_ATLAS_DIFFUSETEXTURE",
            "type": "boolean",
            "defines": [
              "USE_DIFFUSE_TEXTURE",
              "CC_USE_ATTRIBUTE_UV0"
            ]
          }
        ],
        "blocks": [
          {
            "name": "SKINNING",
            "members": [
              {
                "name": "cc_jointsTextureSize",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [
              "CC_USE_SKINNING",
              "CC_USE_JOINTS_TEXTRUE"
            ],
            "binding": 0
          },
          {
            "name": "MAIN_TILING",
            "members": [
              {
                "name": "mainTiling",
                "type": 14,
                "count": 1
              },
              {
                "name": "mainOffset",
                "type": 14,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 1
          },
          {
            "name": "ALPHA_TEST",
            "members": [
              {
                "name": "alphaThreshold",
                "type": 13,
                "count": 1
              }
            ],
            "defines": [
              "USE_ALPHA_TEST"
            ],
            "binding": 2
          },
          {
            "name": "DIFFUSE",
            "members": [
              {
                "name": "diffuseColor",
                "type": 16,
                "count": 1
              }
            ],
            "defines": [],
            "binding": 3
          }
        ],
        "samplers": [
          {
            "name": "diffuseTexture",
            "type": 29,
            "count": 1,
            "defines": [
              "USE_DIFFUSE_TEXTURE"
            ],
            "binding": 30
          }
        ],
        "dependencies": {},
        "name": "builtin-unlit-transparent|unlit-vs|unlit-fs"
      }
    ]
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "wing2",
      "texture": "aeI7DOV2JBFZ6LYPNvHgMD",
      "rect": [
        0,
        0,
        76,
        77
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        76,
        77
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteAtlas",
    "_name": "color.plist",
    "_spriteFrames": {
      "0": {
        "__uuid__": "c92vRF7vlNh7gj6OgZnPBv"
      },
      "1": {
        "__uuid__": "dfonhAUkBDvb8E9ejyotpd"
      },
      "2": {
        "__uuid__": "70jDROjZNPbIbXz9884/bz"
      },
      "3": {
        "__uuid__": "e12tH+ha5GOrYS3q+qjJ7v"
      },
      "4": {
        "__uuid__": "e2TWSqBjNGY6LlI6xADzue"
      },
      "5": {
        "__uuid__": "478P1Id9JJzq4BovoS3edG"
      }
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-spine",
    "_effectAsset": {
      "__uuid__": "0ek66qC1NOQLjgYmi04HvX"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f4",
      "texture": "70KvUwG7dCuqRtFUOs/kaf",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "base",
      "texture": "0bGCJP4dhBYJPIRPAqB+TR",
      "rect": [
        0,
        0,
        319,
        332
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        319,
        332
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb1",
      "texture": "dcdQRMOtVK0I8HItj++ZIc",
      "rect": [
        0,
        0,
        60,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        60,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite",
      "texture": "6eBWFz0oVHPLIGQKf/9Thu",
      "rect": [
        0,
        2,
        40,
        36
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f2",
      "texture": "3eIQvMsahM0IGEUEG/gvGZ",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "ball",
      "texture": "a4eDjy/j1Mt7tn3qGUCIdM",
      "rect": [
        0,
        0,
        102,
        101
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        102,
        101
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "mario",
      "texture": "a8H+P02DNEC7jXW955uAyv",
      "rect": [
        3,
        0,
        250,
        256
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        256,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite_splash",
      "texture": "02delMVqdBD70a/HSD99FK",
      "rect": [
        0,
        0,
        2,
        2
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        2,
        2
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f3",
      "texture": "20q46ePZxB56Yi/XrHfgoi",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bubble3",
      "texture": "96Q7cNzGZJbZ4/H46IdLLs",
      "rect": [
        0,
        0,
        80,
        80
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        80,
        80
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f6",
      "texture": "870s/v2ZZMZqoviOWUgVTe",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "rank",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 6
        }
      ],
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 500,
            "height": 500
          },
          "_fitWidth": true
        },
        {
          "__type__": "0df2f05HKxAEZ1t4eF4az4L",
          "node": {
            "__id__": 2
          },
          "rankWrap": {
            "__id__": 8
          },
          "rankItemPrefab": {
            "__uuid__": "bbM1iXMBpIz6Y3KDiMx5Bd"
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 500
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          250,
          250,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      },
      "_id": "46gGyegqhOCpkbhcKaArpY"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_depth": -1
        }
      ],
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          394.9075927734375,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 4
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "名字",
          "_N$string": "名字",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 80,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -81.87699890136719,
          200.06199645996094,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 5
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "得分",
          "_N$string": "得分",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 80,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          98.87699890136719,
          199.06199645996094,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rankBg",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 7
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 6
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        },
        {
          "__type__": "cc.ScrollView",
          "node": {
            "__id__": 6
          },
          "horizontal": false,
          "brake": 0.9,
          "bounceDuration": 0.3,
          "_N$content": {
            "__id__": 8
          },
          "content": {
            "__id__": 8
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 400
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          -48.62300109863281,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "mask",
      "_parent": {
        "__id__": 6
      },
      "_children": [
        {
          "__id__": 8
        }
      ],
      "_components": [
        {
          "__type__": "cc.Mask",
          "node": {
            "__id__": 7
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ]
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 400
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rankWrap",
      "_parent": {
        "__id__": 7
      },
      "_components": [
        {
          "__type__": "cc.Layout",
          "node": {
            "__id__": 8
          },
          "_layoutSize": {
            "__type__": "cc.Size",
            "width": 400,
            "height": 400
          },
          "_N$layoutType": 2,
          "_N$paddingTop": 5,
          "_N$paddingBottom": 5,
          "_N$spacingY": 10
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 400
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "rankItem",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rankItem",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 3
        },
        {
          "__id__": 4
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "dcfSElDHJEA4+X6uddvqsN"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 100
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          145,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 2
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "名字",
          "_N$string": "名字",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "a0527HauRGY7+ybUdkPIKs"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 255
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 80,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -80,
          -2.114000082015991,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 3
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_useOriginalSize": false,
          "_string": "得分",
          "_N$string": "得分",
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "ecB/FM85NGn7nplyGyp01O"
      },
      "_color": {
        "__type__": "cc.Color",
        "r": 255
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 80,
        "height": 50.4
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          100,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "mask",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__type__": "cc.Mask",
          "node": {
            "__id__": 4
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_type": 1,
          "_segments": 30
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "20cCch++1OjLpmrT20VfCg"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 60,
        "height": 60
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          -171.23699951171875,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 4
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_materials": [
            {
              "__uuid__": "ecpdLyjvZBwrvm+cedCcQy"
            }
          ],
          "_spriteFrame": {
            "__uuid__": "8c20Sso/ZEn7NUfNSM+EBh"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__id__": 0
        },
        "fileId": "c0GaVcvzBMeYfkHcyT8xWM"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 60,
        "height": 60
      },
      "_trs": {
        "__type__": "TypedArray",
        "ctor": "Float32Array",
        "array": [
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1
        ]
      }
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f8",
      "texture": "23+8xEmHBCpJAocAfXu5YQ",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f5",
      "texture": "4eTpDcPW5GUaGhMCdFbiX9",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.EffectAsset",
    "_name": "builtin-clear-stencil",
    "techniques": [
      {
        "passes": [
          {
            "blendState": {
              "targets": [
                {
                  "blend": true
                }
              ]
            },
            "rasterizerState": {
              "cullMode": 0
            },
            "program": "builtin-clear-stencil|vs|fs"
          }
        ]
      }
    ],
    "shaders": [
      {
        "hash": 2380943059,
        "glsl3": {
          "vert": "\nprecision highp float;\n\nin vec3 a_position;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}\n\n"
        },
        "glsl1": {
          "vert": "\nprecision highp float;\n\nattribute vec3 a_position;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1);\n}\n\n",
          "frag": "\nprecision highp float;\n\nvoid main () {\n  gl_FragColor = vec4(1.0);\n}\n\n"
        },
        "builtins": {
          "globals": {
            "blocks": [],
            "samplers": []
          },
          "locals": {
            "blocks": [],
            "samplers": []
          }
        },
        "defines": [],
        "blocks": [],
        "samplers": [],
        "dependencies": {},
        "name": "builtin-clear-stencil|vs|fs"
      }
    ]
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "0",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        50,
        98,
        46,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        46,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.ParticleAsset",
    "_name": "boom",
    "_native": ".plist"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "target",
      "texture": "b7EPcFEYpO1ZlK0yzXw0mo",
      "rect": [
        0,
        0,
        306,
        306
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        306,
        306
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-clear-stencil",
    "_effectAsset": {
      "__uuid__": "c0BAyVxX9JzZy8EjFrc9DU"
    },
    "_defines": {},
    "_props": {}
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb4",
      "texture": "76ocR0RpFMYI9vYK9Ry4K5",
      "rect": [
        0,
        0,
        13,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        13,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb6",
      "texture": "0dWQ7c/lpKRZfncpMOPS7H",
      "rect": [
        0,
        0,
        56,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        56,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "f7",
      "texture": "ccIZLHYmNNSpxZFoETTGtk",
      "rect": [
        0,
        0,
        120,
        160
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        120,
        160
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "1",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        2,
        98,
        46,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        46,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "3",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        2,
        50,
        46,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        46,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "4",
      "texture": "46dGr/RxNKbq3B+RlOEqVq",
      "rect": [
        51,
        2,
        47,
        46
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        47,
        46
      ],
      "capInsets": [
        2,
        2,
        2,
        2
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "bubble2",
      "texture": "7aZhd1+gJHcr/1W0IdAKvG",
      "rect": [
        0,
        0,
        80,
        80
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        80,
        80
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "wall",
      "texture": "3fyu6zyoJBG5YM+9sDE2ny",
      "rect": [
        0,
        0,
        1024,
        417
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        1024,
        417
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "girl",
      "texture": "143RVnWvNGEbgMqpq4Rc9s",
      "rect": [
        0,
        0,
        720,
        720
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        720,
        720
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Material",
    "_name": "builtin-2d-sprite",
    "_effectAsset": {
      "__uuid__": "28dPjdQWxEQIG3VVl1Qm6T"
    },
    "_defines": {
      "USE_TEXTURE": true
    },
    "_props": {}
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0,0,1"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "shooter",
      "texture": "79nH9FBfxK/pySsBSDcb5q",
      "rect": [
        0,
        0,
        40,
        131
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        131
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb5",
      "texture": "e0rGIE/CNO+Iqup5VVYMTK",
      "rect": [
        0,
        0,
        36,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        36,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "jb3",
      "texture": "b6S7X7Rj9PabWngzPt0oJD",
      "rect": [
        0,
        0,
        36,
        60
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        36,
        60
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  }
];
