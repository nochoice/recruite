import { Avatar, AvatarGroup, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, {useState, useEffect} from "react";
import { Position } from "../../../types/position";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface Props {
    positions: Position[],
    value: Position,
    onPosition: (position: Position) => void
}

export default function PositionSelector({positions, value, onPosition}: Props) {

    const [positionSelected, setPositionSelected] = useState<Position>();
    const hasPositions = positions.length !== 0;

    const selectPosition = (position: Position) => {
        onPosition(position)
    }

    useEffect(() => setPositionSelected(value), [value]);
    
    return (
        <div>
            { 
                hasPositions ? (
                    <div>
                        {!positionSelected && (
                            <>
                                <Typography component="div" variant="h4" align="center" >
                                    Choose position
                                </Typography>
                                <br />

                                <Stack direction="row" justifyContent="center" spacing={5}>
                                {
                                    positions.map(position => (
                                        <Card onClick={() => selectPosition(position)}>
                                            <CardContent>
                                                    {position.title} 
                                            </CardContent>
                                        </Card>
                                    ))
                                }
                                </Stack>
                            </>
                        )}

                        {positionSelected && (
                            <>
                                <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                                    <Typography component="div" variant="h4" align="center" >
                                        {positionSelected.title}
                                    </Typography>

                                    <Button startIcon={<ArrowUpwardIcon />} variant="outlined" onClick={() => selectPosition(null) }>Reset position</Button>
                                </Stack>
                                
                            </>
                            
                        )}

                        

                    </div>
                ) : (
                    <div>No positions</div>
                )
            }
            
        </div>
    )
}