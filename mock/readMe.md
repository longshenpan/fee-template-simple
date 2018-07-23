---
title: json-server使用说明
category: api
---

## get请求

1. 使用json-server来自己路由配置来配置get请求

## post请求

1. 使用中间键截取post请求然后做映射返回响应信息

```js
    server.use((req, res, next) => {
      console.log(req.url);
      if (req.method === 'POST') {
        res.status(200).jsonp(postRoutes(req.url));
      }
      next()
    });
```

