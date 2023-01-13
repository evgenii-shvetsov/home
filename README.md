[![homeLogo](https://user-images.githubusercontent.com/46214277/212250398-fb77b52e-3f22-4afd-9ad5-ba01abab63de.png)](https://home-hi1b.onrender.com/)  <br/> <br/> 
[Home](https://home-hi1b.onrender.com/) is a clone of Zillow, a tech real-estate marketplace that allows users to browse homes, take virtual tours, find a local agent, and more. I used  JavaScript, React, Redux, PostgreSQL, AWS, and Google Map Api to build the project. User can search, upload, edit, and save listings.

<br />

<img src="https://user-images.githubusercontent.com/46214277/212251889-fb5f8684-8f2b-4d1a-a08c-325ab4065600.gif">

## Technologies
**Backend:** Ruby on Rails, Bcrypt for generating unique password <br/>
**Frontend:** React-Redux, JavaScript, AWS, Google Map API <br/>
**Database:** PostgreSQL <br/>
**Other:** AWS, Google Map API <br/>

## Features
Users can **search** for listings using "search bar", dropdown filters, map, and add to the "favorites" list. <br />
![search-page](https://user-images.githubusercontent.com/46214277/212255155-60a19f71-48cc-48e4-b1ae-7ec2aecf99ae.gif) <br /><br />

**Create** new listings und **update** existing if logged in <br />

![listing-create](https://user-images.githubusercontent.com/46214277/212255968-b683610a-014f-4876-862f-db35b6b87861.gif) <br /><br />

**Manage** your listings and **Check Saved** listings <br />
![myhome](https://user-images.githubusercontent.com/46214277/212256666-bf00f4d9-9476-4a56-bcca-73ba47179f68.gif) <br /> <br />

## Significant Code
#### Managing filtering thunk action creators to update the store
```javascript
    useEffect(()=>{
        dispatch(removeListings())
 
        dispatch(fetchSearchFilterListings(searchValue))
        .then((listings)=>{
            let result = listings
            if(!Object.keys(result).length){
                setMatch(true)
                dispatch(fetchListings())          
            }
        })
        
    },[dispatch, searchValue])

    setTimeout(()=> setMatch(false),3000)

```

#### Photo uploading to AWS with preview in a Form
```javascript
       useEffect(() => {
        if(listingId){
            dispatch(fetchListing(listingId))
        }
    },[dispatch, listingId])

    const handleFile = ({currentTarget}) => {
        Array.from(currentTarget.files).forEach((file)=>{
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setPhotoFiles(prev => [...prev, file]);
                setPhotoUrls(prev => [...prev, fileReader.result]);
            };
        }
        })
        
    }
```









## Other Visuals

### Login/Logout functionality 
![login-logout](https://user-images.githubusercontent.com/46214277/212258418-1d110d31-ea50-492c-a9ad-dca923ec567c.gif)

### Listing Show Page, Login request
![show-page](https://user-images.githubusercontent.com/46214277/212259198-42e7a85c-69c3-4f08-be6c-28405896fbd1.gif)


