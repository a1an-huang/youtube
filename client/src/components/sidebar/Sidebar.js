import React from "react";
import "./_sidebar.scss";

import{ MdSubscriptions, MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome, MdSettings, MdFlag, MdComment } from 'react-icons/md'

const Sidebar = ({sidebar}) => {

    return( 
		<nav className={sidebar? "sidebar open": "sidebar close"}>
			<li>
				<MdHome size={23} />
				<span>Home</span>
			</li>
			<li>
				<MdSubscriptions size={23} />
				<span>Subscriptions</span>
			</li>	
			<li>
				<MdThumbUp size={23} />
				<span>Liked Videos</span> 
			</li>
			<li>
				<MdHistory size={23} />
				<span>History</span> 
			</li>
			<li>
				<MdLibraryBooks size={23} />
				<span>Library</span> 
			</li>
			<hr />
			<li>
				<MdSettings size={23} />
				<span>Settings</span> 
			</li>
			<li>
				<MdFlag size={23} />
				<span>Report History</span> 
			</li>
			<li>
				<MdComment size={23} />
				<span>Send Feedback</span> 
			</li>
			<li>
				<MdExitToApp size={23} />
				<span>Log Out</span> 
			</li>
			<hr />
		</nav>
	)
};

export default Sidebar;
