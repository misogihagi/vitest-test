import {describe, it, expect} from 'vitest';
import {render} from 'solid-testing-library';
import Tes from './Tes';

it('render test', () => {
    render(()=><Tes></Tes>);
});
