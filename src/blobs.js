export const blob1Html =
`
  <div className='blobs-container'>      
      <div className='blob'>
          <h1>Just flex 1</h1>
      </div>
      <div className='blob'>
        <h1>Just flex 2</h1>
      </div>
   </div>

`
export const blob2Html = 
`
<div className='blobs-stretch-container'>
    <div className='blob-stretch'>
        <h1>Just flex 1</h1>
    </div>
    <div className='blob-stretch'>
      <h1>Just flex 2</h1>
    </div>
</div>

`

export const blob3Html =
`
<div className='blobs-max-height-container'>
    <div className='blob-max-height x1'>
        <h1>Flex stretch 1</h1>
    </div>
    <div className='blob-max-height x2'>
      <h1>Flex stretch 2</h1>
    </div>
</div>

`

export const blob1Css =
`
  .blobs-container{
      padding: 2vw;
      display: flex;
    }

    .blob{
      display: flex;
      padding:15px;
    }
  `
  export const blob2Css =
  `
  .blobs-stretch-container{
    padding: 2vw;
    display: flex;
    flex-direction: row;
  }
  .blob-stretch{
    display: flex;
    padding:15px;
    flex:1;
  }

  `

  export const blob3Css =
  `
  .blobs-max-height-container{
    padding: 2vw;
    display: flex;
    flex-direction: row;
  }
  .blob-max-height{
    padding:15px;
    display: flex;
    flex:1;
  }
  .x2{
    flex:2;
  }

  `