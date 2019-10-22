import React from 'react';

import SideBar from '@components/sidebar';

const IndexPage = () => (
  <>
    <SideBar />
    <div id="wrapper">
      <div id="main">
        <section>
          <div className="container">
            <section>
              <h1>NOT FOUND</h1>
              <p>Not a valid URL</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default IndexPage;
