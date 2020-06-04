# Routes



### HMR Refresh is not work in nested router 

https://github.com/gaearon/react-hot-loader/issues/620

solved: add `<base>` tag

```html
<html>
    <head>
        ....
        <base href="/" />
        ....
    </head>
</html>

```