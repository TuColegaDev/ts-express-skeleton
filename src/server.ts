import app from './app'

app.listen(app.get('port'), () => {
    console.log(`✅ App is running: https://localhost:${app.get('port')}`)
})