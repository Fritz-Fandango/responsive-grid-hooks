import React, { useState, useEffect } from 'react';

// Material components
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// user components
import UserCard from './components/userCard/UserCard';

// import user styles
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://reqres.in/api/users?per_page=20')
        .then((res) => res.json())
        .then((res) => ({
          users: res.data,
          company: res.ad,
        }));

      setData(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {!loading
        && (
        <>
          <Typography gutterBottom component="h3" variant="h3">
            <Link href={data.company.url} color="inherit" target="_blank">
              {data.company.company}
            </Link>
          </Typography>
          <Typography gutterBottom component="p">
            {data.company.text}
          </Typography>
          <Grid
            container
            spacing={10}
            style={{ padding: '24px' }}
          >
            {data.users.map((user) => (
              <Grid
                item
                key={user.id}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
              >
                <UserCard
                  key={user.id}
                  email={user.email}
                  firstname={user.first_name}
                  lastname={user.last_name}
                  avatar={user.avatar}
                />
              </Grid>
            ))}
          </Grid>
        </>
        )}
    </div>
  );
}

export default App;
