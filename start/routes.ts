import Route from '@ioc:Adonis/Core/Route';

import Index from 'App/Components/pages/Index';
import WithProps from 'App/Components/pages/WithProps';
import WithContext from 'App/Components/pages/WithContext';

Route.get('/', async ({ react }) => react.render(Index));
Route.get('/my', 'MyController.index');
Route.get('/with-props', async ({ react }) =>
  react.render(WithProps, { name: 'my friend' }),
);
Route.get('*', async ({ react }) => react.render(WithContext));
