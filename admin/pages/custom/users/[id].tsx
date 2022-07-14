import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { useQuery } from '@keystone-6/core/admin-ui/apollo';
import { useRouter } from 'next/router'
import React, { useMemo } from 'react';
import { Avatar, Paper } from '@mui/material';
import { QUERY_GET_USER } from '../../../queries/user';
import EmailIcon from '@mui/icons-material/EmailSharp';
import PhoneIcon from '@mui/icons-material/LocalPhoneSharp';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { styled } from '@mui/material/styles';

const AVATAR_SIZE = 180;

const AvatarStyled = styled(Avatar)(({theme}) => ({
    position: 'relative',
    top: -50,
    border: `2px solid ${theme.palette.primary.main}`,
    marginLeft: 30,
    marginRight: 30,
}));

const Name = styled('h1')(() => ({
    position: 'absolute',
    top: '-74px'
}));

const Content = styled('div')(() => ({
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20
}));

const UserWrapper = styled(Paper)(() => ({
    marginTop: 100,
    display: 'flex'
}));


const Line = styled('div')(({theme}) => `
    margin-bottom: 12px;
    display: flex;
    font-weight: ${theme.typography.fontWeightMedium};
    svg {
        margin-right: 8px;
    }
`);


export default function UserDetailPage () {
    const router = useRouter();
    const { data, error, loading } = useQuery(QUERY_GET_USER, {variables: {id: router.query.id}});

    const user = useMemo(() => data?.user, [data]);

    return (
        <PageContainer header>
            {user && (
                <UserWrapper elevation={3}>
                    <AvatarStyled
                        alt="Remy Sharp"
                        src={user.image.url}
                        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
                    />

                    <Content>
                        <Name>{user.firstName} {user.lastName} ({user.name})</Name>

                        <Line><EmailIcon  color='primary' /> <a href={`mailto:${user.email}`}>{user.email}</a></Line>
                        <Line><PhoneIcon color='primary' /> <a href={`tel:${user.phone}`}>{user.phone}</a></Line>
                        <Line><LinkedIn color='primary' /> <a target="_blank" href={user.linkedIn}>{user.linkedIn}</a></Line>
                        
                        <br />

                        <DocumentRenderer document={user.description.document} />
                    
                    </Content>
                </UserWrapper>
            )}
        </PageContainer>
    )
}