/**
 * Berkas routes.js itu sendiri menampung kode dalam menentukan
 * routes pada Hapi server seperti path, method, dan handler yang digunakan
 */

const { deleteNoteByIdHandler } = require('./handler');
const { editNoteByIdHandler } = require('./handler');
const { getNoteByIdHandler } = require('./handler');
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
