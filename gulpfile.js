/* File: gulpfile.js */

// ������, ����������� �������� ����� �� ��������� ����������
var requireDir = require('require-dir');

// ������������� �������� ���������� ����������,
// ����������� ��������� � ������ development & production ���������
global.devBuild = process.env.NODE_ENV !== 'production';

// ������������ ������� � ����� � ������� � ��������
requireDir('./lib/gulp/tasks', { recurse: true });