import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, BalloonIcon, CalendarIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}
        <h1>ɢᴜɪʟʜᴇʀᴍᴇ,</h1>
        <h2>@gtavaresx7</h2>
        <p>💔</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <BalloonIcon />
            Nascido(a) em 21 de novembro de 2003
          </li>
          <li>
            <CalendarIcon />
            Ingressou em fevereiro de 2020
          </li>
        </ul>
        <Followage>
          <span>
            <strong>333</strong> Seguindo
          </span>
          <span>
            <strong>777</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
