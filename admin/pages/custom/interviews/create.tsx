import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo';

import { LoadingDots, loadingToneValues } from '@keystone-ui/loading';
import { BoxIcon, FacebookIcon } from '@keystone-ui/icons';
import { AlertDialog } from '@keystone-ui/modals';
import { Select } from '@keystone-ui/fields';
import { Options } from '@keystone-ui/options';
import React, { useState, useEffect } from 'react';
import CompanySelector from '../../../components/company-selector';
import { Paper } from '@mui/material';


export default function InterviewCreatePage () {
    // const [first, setfirst] = useState(second)

    const { data, error, loading } = useQuery(
        gql`{
            users{
              id
              name
              email
            }
          }`
      );



      const [isOpen, setIsOpen] = useState(false);

     

     
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
        <PageContainer header="Create interview">
            <h1>Create interview</h1>
            {/* {JSON.stringify(data?.users)} */}
            {/* {JSON.stringify(error)} */}
            {/*  */}

            <CompanySelector></CompanySelector>

            {/* <br /><br /><br /><br /><br />
            <LoadingDots label='sasaas' tone='positive' size='large'></LoadingDots>
            <BoxIcon></BoxIcon> 
            <FacebookIcon onClick={click} additive='replace' accentHeight={100} height={54}> </FacebookIcon>

            <AlertDialog  isOpen={isOpen} title='dsad' children={(<div>aaaa</div>)} actions={{ confirm: {loading: false, label: 'Confirm', action: () => setIsOpen(false)}}}></AlertDialog> */}
        </PageContainer>
    )
}