import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jsdom-global/register'; // with testEnvironment is node

configure({ adapter: new Adapter() });
