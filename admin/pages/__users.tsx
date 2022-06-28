

import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';

import { LoadingDots, loadingToneValues } from '@keystone-ui/loading';
import { BoxIcon, FacebookIcon } from '@keystone-ui/icons';
import { AlertDialog } from '@keystone-ui/modals';
import { Select } from '@keystone-ui/fields';
import { Options } from '@keystone-ui/options';
import React, { useState } from 'react';


export default function UsersPage () {

    const { data, error, loading } = useQuery(
        gql`{
            users{
              id
              name,
              email
            }
          }`
      );
      const [isOpen, setIsOpen] = useState(false);


      const click = () => {
        setIsOpen(true);
      }

      const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
      ];

    return (
        <PageContainer header="Custom Page">
            <h1>This is a custom Admin UI Page</h1>
            <p>It can be accessed via the route <a href="/custom-page">/custom-page</a></p>

            {JSON.stringify(data?.users)}
            {JSON.stringify(error)}
            <br /><br /><br /><br /><br />
            <LoadingDots label='sasaas' tone='positive' size='large'></LoadingDots>
            <BoxIcon></BoxIcon> 
            <FacebookIcon onClick={click} additive='replace' accentHeight={100} height={54}> </FacebookIcon>

            <Select isSearchable={true} onChange={click} value={colourOptions[1]} options={colourOptions}></Select>
            <AlertDialog  isOpen={isOpen} title='dsad' children={(<div>aaaa</div>)} actions={{ confirm: {loading: false, label: 'Confirm', action: () => setIsOpen(false)}}}></AlertDialog>
        </PageContainer>
    )
}