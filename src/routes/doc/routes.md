# Routes
> https://reacttraining.com/react-router/web/guides/quick-start


## Issues

### Error Pages 
`path = *` , get any no math path , make sure path is correct
````js
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/topics">
            <RoutesTopics />
        </Route>
        <Route path="*">
            <NotFound404 />
        </Route>
    </Switch>
````

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