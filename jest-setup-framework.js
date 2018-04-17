import {configure, mount, render, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

configure({adapter: new Adapter()});

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = require('react');
