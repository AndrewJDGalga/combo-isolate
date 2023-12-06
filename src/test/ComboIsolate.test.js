import React from 'react';
import renderer from 'react-test-renderer';
import Board from '../components/Board';

describe('Board', ()=>{
    test('render board', ()=>{
        const testComponent = <Board />;
        const testRoot = renderer.create(
            <React.StrictMode>
                {testComponent}
            </React.StrictMode>,
        )
        
    });
});