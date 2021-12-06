{
  "admin-state": "enable",
  "srl_nokia-interfaces-vlans:vlan-tagging": true,
  "subinterface": [
    {
      "index": 0,
      "type": "srl_nokia-interfaces:bridged",
      "admin-state": "enable",
      "srl_nokia-interfaces-vlans:vlan": {
        "encap": {
          "single-tagged": {
            "vlan-id": 10
          }
        }
      }
    }
  ]
}