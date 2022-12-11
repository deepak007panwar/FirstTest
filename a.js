// xstate configuration for  inventory process management

import { Machine } from 'xstate';

export const inventoryMachine = Machine({
    id: 'inventory',
    initial: 'idle',
    states: {
        idle: {
            on: {
                ADD: 'adding',
                REMOVE: 'removing',
                UPDATE: 'updating',
                GET: 'getting',
                LIST: 'listing',
                ERROR: 'error'
            }
        },
        adding: {
            on: {
                SUCCESS: 'idle',
                ERROR: 'error'
            }
        },
        removing: {
            on: {
                SUCCESS: 'idle',
                ERROR: 'error'
            }
        },
        updating: {
            on: {
                SUCCESS: 'idle',
                ERROR: 'error'
            }
        },
        getting: {
            on: {
                SUCCESS: 'idle',
                ERROR: 'error'
            }
        },
        listing: {
            on: {
                SUCCESS: 'idle',
                ERROR: 'error'
            }
        },
        error: {
            on: {
                RETRY: 'idle'
            }
        }
    }

});


