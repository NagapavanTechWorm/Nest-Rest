import React from 'react'

const Forminput = ({label,name, defaultvalue,type,size}) => {
  return (
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <input type={type} defaultValue={defaultvalue} name={name} className={`input input-bordered w-full max-w-xs input-${size}`} />
</label>
  )
}

export default Forminput;