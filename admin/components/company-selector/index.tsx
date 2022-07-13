import React, {useState, useEffect} from 'react';
import { gql, useLazyQuery, useQuery } from '@keystone-6/core/admin-ui/apollo';
import { Select, DatePicker } from '@keystone-ui/fields';
import { QUERY_COMPANY, QUERY_COMPANIES_OPTIONS } from '../../queries/company';
import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { deepOrange, deepPurple } from '@mui/material/colors';
import ContactSelector from '../contact/contact-selector';
import { Contact } from '../../../types/contact';
import PositionSelector from '../position/position-selector';
import { Position } from '../../../types/position';
import CompanySelected from '../company/company-selected';
import { Company } from '../../../types/company';

export default function CompanySelector() {
    const [companiesOptions, setCompaniesOptions] = useState([]);
    const [interviewDate, setInterviewDate] = useState(new Date());
    const [companyOptionSelected, setCompanyOptionSelected] = useState<{label: string; value: string} | null>(null);
    const [companySelected, setCompanySelected] = useState<Company>();
    const [positionSelected, setPositionSelected] = useState<Position>();
    

    const { data: companiesData } = useQuery(QUERY_COMPANIES_OPTIONS);
    const [getCompany, { data: companyData }] = useLazyQuery(QUERY_COMPANY);

    useEffect(() => {
        if (!companyOptionSelected) {
            setPositionSelected(null);
            return;
        };

        getCompany({variables: {id: companyOptionSelected?.value}})
    }, [companyOptionSelected])

    useEffect(() => {
        if (!companiesData) return;

        const options = companiesData.companies.map(company => ({label: company.name, value: company.id}));
        setCompaniesOptions(options);
    
    }, [companiesData]);


    const selectCompanyHandler = (option: any) => setCompanyOptionSelected(option);
    const selectPositionHandler = (position: Position) => setPositionSelected(position);


    return (
        <div className="company-selector">

            
            {!companyOptionSelected && (
                <Stack direction="column" justifyContent="center" alignItems="center">
                    <Typography component="div" variant="h4" align="center">
                        Choose company
                    </Typography>
                    <Select value={companyOptionSelected} isSearchable={true} onChange={selectCompanyHandler} options={companiesOptions}></Select>
                </Stack>
            )}
            
            {companyOptionSelected && companyData && (
                <div>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Button startIcon={<ArrowUpwardIcon />} variant="outlined" onClick={() => setCompanyOptionSelected(null) } disabled={positionSelected}>Select company</Button>
                        <CompanySelected company={companyData.company}></CompanySelected>
                    </Stack>

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
                        {/* <img src={companyData?.company.logo?.url} height={100}/> */}
                    </Stack>

                    <br /><br /><br />
                    <PositionSelector positions={companyData?.company.positions} onPosition={selectPositionHandler} value={positionSelected}></PositionSelector>

                    <br /><br /><br />
                    {JSON.stringify(positionSelected)}
                    <br /><br /><br />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Date&Time picker"
                            value={interviewDate}
                            onChange={setInterviewDate}
                            renderInput={(params) => <TextField {...params} />}
                            />

                    </LocalizationProvider>
                   

                    <Stack direction="row" alignItems="center" spacing={1}>
                        {
                            companyData?.company.contacts.map((contact: Contact) => (
                                <ContactSelector contact={contact} />
                            ))
                        }
                    </Stack>

                    {/* <Stack direction="row" alignItems="center" spacing={1}>
                        {
                            positionSelected?.contacts.map((contact: Contact) => (
                                <ContactSelector contact={contact} />
                            ))
                        }
                    </Stack> */}
                    
                   
                
                    
            
                    {JSON.stringify(companyData)}
                </div>
            )}
        </div>
    )
}