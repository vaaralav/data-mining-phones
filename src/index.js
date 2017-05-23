// @flow
import 'babel-polyfill';
import app from './app';

// Use app from separate module to make babel-polyfill load first
app(process.argv);