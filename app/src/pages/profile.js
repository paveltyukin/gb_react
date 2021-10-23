import { Header, ProfileTemplate } from '../components';


export function ProfilePage() {

  return (
    <div>
      <ProfileTemplate header={<Header />}>
        Profile Page
      </ProfileTemplate>
    </div>
  )
}