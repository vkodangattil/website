import React from 'react';
import '../../App.css'
import { Document, Page } from 'react-pdf';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import 'react-vertical-timeline-component/style.min.css';
import DownloadLink from "react-download-link";

function Resume () {
    return (
        <div className="resume-section" id="resume"> 
            <div>
                <Timeline className="timeline" lineColor={'#000000'}>
                    <TimelineItem
                        key="001"
                        dateText="Software Engineer Intern"
                        dateInnerStyle={{ background: 'black', color: 'white' }}
                        style={{ color: 'black' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h2>FanDuel</h2>
                        <h3 style={{ color: '#888888' }} >June 2021 - August 2021</h3>
                        <p>
                            Built a prototype for a new game mode in daily fantasy sports that allows players to create a company and
                            choose real players to sponsor for potential profit or loss
                        </p>
                        <p>
                            Collaborated with a team of four other interns to design and build REST API utilizing Spring Boot and MyBatis
                        </p>
                        <p>
                            Constructed frontend user interface for game using React and JavaScript
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="Software Engineer Intern"
                        dateInnerStyle={{ background: 'black', color: 'white' }}
                        style={{ color: 'black' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h2>Staples</h2>
                        <h3 style={{ color: '#888888' }} >June 2020 - August 2020</h3>
                        <p>
                            Worked on the Account Services team to test and modify features within the Account Services API and use
                            the API to carry out requests for corporate accounts
                        </p>
                        <p>
                            Increased code coverage by 5% for the Account Services API
                        </p>
                        <p>
                            Fixed and reported bugs for various functions within the API
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="Data Science Intern"
                        dateInnerStyle={{ background: 'black', color: 'white' }}
                        style={{ color: 'black' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h2>ACEA</h2>
                        <h3 style={{ color: '#888888' }} >October 2019 - January 2020</h3>
                        <p>
                            Created multiple web scrapers using Beautiful Soup, Selenium, and Scrapy to collect data for eventual
                            integration into a recommendation engine for new users
                        </p>
                        <p>
                            Scraped physician profile data from individual state medical boards so that new users could have their
                            information be automatically filled in when registering
                        </p>
                        <p>
                            Assisted in cleaning and interpreting data from these scrapers
                        </p>
                    </TimelineItem> 
                </Timeline>    
            </div>
        </div>
    );
}

export default Resume;