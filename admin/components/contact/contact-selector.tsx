import { Avatar, AvatarGroup } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { Contact } from "../../../types/contact";

interface Props {
    contact: Contact
}

export default function ContactSelector({contact}: Props) {
    const name = `${contact.name[0]}${contact.surname[0]}`;

    return (
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{name}</Avatar>
    )
}