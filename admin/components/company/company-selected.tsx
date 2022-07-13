
import { Avatar, AvatarGroup, Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { Company } from "../../../types/company";
import { Contact } from "../../../types/contact";

interface Props {
    company: Company
}

export default function CompanySelected({company}: Props) {

    return (
        <Card>
            <CardContent>
                {company?.logo?.url && (
                    <CardMedia
                        component="img"
                        sx={{ height: 140 }}
                        image={company?.logo?.url}
                        alt={company.name}
                    />
                )}
                
                <Typography component="div" variant="h5" align="center">
                    {company.name} 
                </Typography>
            </CardContent>
        </Card>
    )
}

