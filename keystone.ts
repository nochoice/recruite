/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

import { insertSeedData } from './seed-data'

const baseUrl = 'http://localhost:3000';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
      useMigrations: true,
      async onConnect(context) {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(context);
        }
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    storage: {
      // The key here will be what is referenced in the image field
      my_local_images: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: path => `${baseUrl}/images${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
      company_contract: {
        kind: 'local',
        type: 'file',
        generateUrl: path => `${baseUrl}/contracts${path}`,
        serverRoute: {
          path: '/contracts',
        },
        storagePath: 'public/contracts',
      },

      candidate_documents: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'file',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: path => `${baseUrl}/candidate-documents${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/candidate-documents',
        },
        storagePath: 'public/candidate-documents',
      },

      
    },
    session,
  })
);
