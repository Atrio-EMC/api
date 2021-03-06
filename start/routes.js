'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/ping', () => { return 'pong' }).middleware(['auth', 'get_user'])

// Auth routes
Route.post('/login', 'Auth/AuthController.login').validator('Auth/Login').as('auth.login')
Route.post('/signup', 'Auth/AuthController.signup').validator('Auth/Signup').as('auth.signup')
Route.post('/logout', 'Auth/AuthController.logout').as('auth.logout')

Route.group(() => {

  Route.resource('customer', 'CustomerController')

}).prefix('api/v1')
  .middleware(['auth', 'get_user'])
