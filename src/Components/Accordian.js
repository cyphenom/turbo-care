import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SimpleAccordion({ values, setValues }) {
    const handleOnChange = (position, data) => {
        var value = values[position] === false ? data : false

        setValues(values.map((item, index) =>
            index === position ? value : item
        ));
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(0, e.target.labels[0].innerText)} />} label="Company" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(1, e.target.labels[0].innerText)} />} label="Products" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(2, e.target.labels[0].innerText)} />} label="Feature" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(3, e.target.labels[0].innerText)} />} label="Repair" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(4, e.target.labels[0].innerText)} />} label="Parts" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(5, e.target.labels[0].innerText)} />} label="Accessories" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(6, e.target.labels[0].innerText)} />} label="Reach-Ins" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(7, e.target.labels[0].innerText)} />} label="Food Prep Tables" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(8, e.target.labels[0].innerText)} />} label="Undercounters" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(9, e.target.labels[0].innerText)} />} label="Worktops" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(10, e.target.labels[0].innerText)} />} label="Chef Bases" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(11, e.target.labels[0].innerText)} />} label="Glass Door Merchandisers" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(12, e.target.labels[0].innerText)} />} label="Ice Cream Merchandisers" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(13, e.target.labels[0].innerText)} />} label="Open Display Merchandisers" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(14, e.target.labels[0].innerText)} />} label="Display Cases" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(15, e.target.labels[0].innerText)} />} label="Underbar Equipment" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(16, e.target.labels[0].innerText)} />} label="Milk Coolers" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Series</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(17, e.target.labels[0].innerText)} />} label="Pro Series" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(18, e.target.labels[0].innerText)} />} label="Super Deluxe Series" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(19, e.target.labels[0].innerText)} />} label="M3 Series" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(20, e.target.labels[0].innerText)} />} label="J Series" />
                        <FormControlLabel control={<Checkbox onChange={(e) => handleOnChange(21, e.target.labels[0].innerText)} />} label="E Line" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}