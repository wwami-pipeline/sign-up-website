import React, { Component } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    withStyles,
    Typography,
    CssBaseline,
    Paper,
    Fab,
    Grid
} from "@material-ui/core";
import NavBar from "../../components/NavBar";

const styles = () => ({
    
});

class UDSM extends Component {
    render () {
        return (
            <div>
                <AppBar position="static">
                    <NavBar />
                </AppBar>
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/57530930_2306719726242901_5560586732409192448_n.jpg?_nc_cat=106&_nc_oc=AQkZSzNy95IiiR3qj35hcAPUDDB9zeSwB4INY-3SuBTBM5OQd-5dOMJPoEsICF-nlo8&_nc_ht=scontent-sea1-1.xx&oh=45c73550607dfabee59e2dd5692be551&oe=5D9A978A" alt="Logo" />
                <Typography><strong>Community Partner: </strong>Elizabeth Gregory Home</Typography>
                <Typography><strong>Location: </strong>1604 NE 50th Street, Seattle, WA 98105</Typography>
                <Typography><strong>Description: </strong>The Elizabeth Gregory Home serves single homeless women in the greater Seattle area by providing transitional housing, a day center, and case management services. They provide a friendly refuge where homeless and at-risk women have access to compassionate care. Volunteers meet with women to listen to their health concerns, check vitals, and to provide education on the referral process and available healthcare services. </Typography>
                <Typography><strong>Website Link: </strong>https://udstreetmed.weebly.com/</Typography>
                <Typography><strong>Shift: </strong>First and third Fridays (11:00am-1:00pm)</Typography>
                <Typography><strong>Required Training for Students: </strong>Student Volunteers will undergo an application process, beginning with completing an Online Application form. Bao Nguyen (UDSM Volunteer Coordinator), nguyeb8@uw.edu, will receive completed volunteer applications and provide further instruction.</Typography>
                <Typography><strong>Other Requirements for Preceptors: </strong>The preceptor is a UW or community professional who currently holds an active medical license. Prospective preceptors must be cleared by their respective departments regarding credentials.   All volunteer providers must secure liability coverage through the Washington Volunteer and Retired Physicians Program. This coverage is provided by the DOH at no cost.  For information on how to sign up, click here.</Typography>
                <Typography><strong>Clinic Flow: </strong>Our Outreach Teams are small, which helps to reduce anxiety in our homeless clients from having too many providers at once, allowing for effective communication. Our team involves 3 main roles:
                Preceptors (one per team) are responsible for overseeing the health services provided by graduate/professional students. They provide professional advices and referrals, and respond to emergency situations. ​
                Graduate/Professional Student Volunteers (two per team) are responsible for providing medical care within their discipline. This includes acquiring patient medical history and concerns, taking vital signs, conducting motivational interviewing, and providing resources referrals. 
                Undergraduate Scribes (one per team) are responsible for documenting outreach events and record them in an online database. This data is extremely crucial, and will be incorporated into our annual reports and used to develop better services for the community.</Typography>
                <Typography><strong>Student Volunteer Information: </strong>Student volunteers across all disciplines and backgrounds are what makes up our unique, inter-professional services and are integral parts of our organization. Student volunteers can serve one or more roles with UDSM, including outreach volunteers, subcommittee members, or leadership members. 

                Eligibility: All student volunteers must be current students at University of Washington in order to be eligible to provide services within UDSM.

                Graduate/Professional students perform a wide range of direct patient care tasks, according to their discipline and the preceptor's specialties. The volunteer's tasks may include acquiring patient medical history and current concerns, taking vital signs, conducting motivational interviewing, and providing resources referrals and navigation
                They must be currently enrolled in one of the following UW Health Sciences programs:
                o Medicine
                o Rehab Medicine
                o Social Work
                o Nursing (ABSN only)
                o Pharmacy
                o Dentistry
                o Law
                o Public Health

                ​Undergraduate students: from all majors and year are welcomed to apply. They are not required to have any prior medical experience in order to serve for UDSM. They are eligible to serve as an Undergraduate Scribe, join a subcommittee, or several of the Leadership positions (other positions are reserved for graduate/professional students and preceptors.
            </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(UDSM);