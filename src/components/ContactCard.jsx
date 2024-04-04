import React from 'react';

function ContactCard( { icon: Icon, userName, link } ) {
  let linkProps = {};

  if (link.includes('@')) {
    // If link contains '@', treat it as an email address
    linkProps = {
      href: `mailto:${link}`
    };
  } else {
    // Otherwise, treat it as a URL
    linkProps = {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer"
    };
  }

  return (
    <div className="hover:relative hover:opacity-100 hover:scale-150 opacity-50 text-slate-900 p-8 h-48 w-60 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Icon size="24" className="mb-2" />
        <a className="text-slate-900" {...linkProps}>{userName}</a>
      </div>
    </div>
  );
}

export default ContactCard;