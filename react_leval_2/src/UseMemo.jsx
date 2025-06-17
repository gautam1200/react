import React, { useContext, useMemo, useState } from 'react'
import { AddColor } from './Hooks'
import NewPage from './Newpages';

function UseMemo() {

  const { SetColor } = useContext(AddColor)
  console.log(SetColor);


  return (
    <>
      <div>
        <h1 style={{ color: SetColor }}>page 2</h1>
        <NewPage />
      </div>
    </>

  )
}

export default UseMemo