"use client"

import { useEffect } from "react"

export default function Map() {
  function getCurrentPosition(map) {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (position) => {
        map.setCenter(new window.kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        ))
      }
    )
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6c5cc719c6ca16c86da9676333a47736&autoload=false"
    script.async = true
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map")
        const options = {
          center: new window.kakao.maps.LatLng(37.566295, 126.977945),
          level: 3,
        }
        getCurrentPosition(new window.kakao.maps.Map(container, options))
      })
    }
    document.head.appendChild(script)
  }, [])

  return <div id="map" style={{ width: "100%", height: "100%" }} />
}
