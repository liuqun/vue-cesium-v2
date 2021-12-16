/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-8d13db60","./Check-70bec281","./Cartographic-f27b0939","./BoundingSphere-c409f092","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./GeometryAttributes-aacecde6","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./VertexFormat-fe4db402"],function(e,l,m,A,C,v,h,z,w,F,g,u){var k=new A.Cartesian3;function s(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;if(m.Check.typeOf.object("min",t),m.Check.typeOf.object("max",a),l.defined(e.offsetAttribute)&&e.offsetAttribute===g.GeometryOffsetAttribute.TOP)throw new m.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");var r=l.defaultValue(e.vertexFormat,u.VertexFormat.DEFAULT);this._minimum=A.Cartesian3.clone(t),this._maximum=A.Cartesian3.clone(a),this._vertexFormat=r,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}s.fromDimensions=function(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).dimensions;m.Check.typeOf.object("dimensions",t),m.Check.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),m.Check.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),m.Check.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);var a=A.Cartesian3.multiplyByScalar(t,.5,new A.Cartesian3);return new s({minimum:A.Cartesian3.negate(a,new A.Cartesian3),maximum:a,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})},s.fromAxisAlignedBoundingBox=function(e){return m.Check.typeOf.object("boundingBox",e),new s({minimum:e.minimum,maximum:e.maximum})},s.packedLength=2*A.Cartesian3.packedLength+u.VertexFormat.packedLength+1,s.pack=function(e,t,a){return m.Check.typeOf.object("value",e),m.Check.defined("array",t),a=l.defaultValue(a,0),A.Cartesian3.pack(e._minimum,t,a),A.Cartesian3.pack(e._maximum,t,a+A.Cartesian3.packedLength),u.VertexFormat.pack(e._vertexFormat,t,a+2*A.Cartesian3.packedLength),t[a+2*A.Cartesian3.packedLength+u.VertexFormat.packedLength]=l.defaultValue(e._offsetAttribute,-1),t};var t,y=new A.Cartesian3,f=new A.Cartesian3,p=new u.VertexFormat,c={minimum:y,maximum:f,vertexFormat:p,offsetAttribute:void 0};s.unpack=function(e,t,a){m.Check.defined("array",e),t=l.defaultValue(t,0);var r=A.Cartesian3.unpack(e,t,y),n=A.Cartesian3.unpack(e,t+A.Cartesian3.packedLength,f),i=u.VertexFormat.unpack(e,t+2*A.Cartesian3.packedLength,p),o=e[t+2*A.Cartesian3.packedLength+u.VertexFormat.packedLength];return l.defined(a)?(a._minimum=A.Cartesian3.clone(r,a._minimum),a._maximum=A.Cartesian3.clone(n,a._maximum),a._vertexFormat=u.VertexFormat.clone(i,a._vertexFormat),a._offsetAttribute=-1===o?void 0:o,a):(c.offsetAttribute=-1===o?void 0:o,new s(c))},s.createGeometry=function(e){var t=e._minimum,a=e._maximum,r=e._vertexFormat;if(!A.Cartesian3.equals(t,a)){var n,i,o=new w.GeometryAttributes;if(r.position&&(r.st||r.normal||r.tangent||r.bitangent)){if(r.position&&((i=new Float64Array(72))[0]=t.x,i[1]=t.y,i[2]=a.z,i[3]=a.x,i[4]=t.y,i[5]=a.z,i[6]=a.x,i[7]=a.y,i[8]=a.z,i[9]=t.x,i[10]=a.y,i[11]=a.z,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=a.x,i[16]=t.y,i[17]=t.z,i[18]=a.x,i[19]=a.y,i[20]=t.z,i[21]=t.x,i[22]=a.y,i[23]=t.z,i[24]=a.x,i[25]=t.y,i[26]=t.z,i[27]=a.x,i[28]=a.y,i[29]=t.z,i[30]=a.x,i[31]=a.y,i[32]=a.z,i[33]=a.x,i[34]=t.y,i[35]=a.z,i[36]=t.x,i[37]=t.y,i[38]=t.z,i[39]=t.x,i[40]=a.y,i[41]=t.z,i[42]=t.x,i[43]=a.y,i[44]=a.z,i[45]=t.x,i[46]=t.y,i[47]=a.z,i[48]=t.x,i[49]=a.y,i[50]=t.z,i[51]=a.x,i[52]=a.y,i[53]=t.z,i[54]=a.x,i[55]=a.y,i[56]=a.z,i[57]=t.x,i[58]=a.y,i[59]=a.z,i[60]=t.x,i[61]=t.y,i[62]=t.z,i[63]=a.x,i[64]=t.y,i[65]=t.z,i[66]=a.x,i[67]=t.y,i[68]=a.z,i[69]=t.x,i[70]=t.y,i[71]=a.z,o.position=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i})),r.normal){var m=new Float32Array(72);m[0]=0,m[1]=0,m[2]=1,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=1,m[9]=0,m[10]=0,m[11]=1,m[12]=0,m[13]=0,m[14]=-1,m[15]=0,m[16]=0,m[17]=-1,m[18]=0,m[19]=0,m[20]=-1,m[21]=0,m[22]=0,m[23]=-1,m[24]=1,m[25]=0,m[26]=0,m[27]=1,m[28]=0,m[29]=0,m[30]=1,m[31]=0,m[32]=0,m[33]=1,m[34]=0,m[35]=0,m[36]=-1,m[37]=0,m[38]=0,m[39]=-1,m[40]=0,m[41]=0,m[42]=-1,m[43]=0,m[44]=0,m[45]=-1,m[46]=0,m[47]=0,m[48]=0,m[49]=1,m[50]=0,m[51]=0,m[52]=1,m[53]=0,m[54]=0,m[55]=1,m[56]=0,m[57]=0,m[58]=1,m[59]=0,m[60]=0,m[61]=-1,m[62]=0,m[63]=0,m[64]=-1,m[65]=0,m[66]=0,m[67]=-1,m[68]=0,m[69]=0,m[70]=-1,m[71]=0,o.normal=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:m})}if(r.st){var u=new Float32Array(72),s=0;u[s++]=0,u[s++]=0,u[s++]=-1,u[s++]=1,u[s++]=0,u[s++]=-1,u[s++]=1,u[s++]=1,u[s++]=-1,u[s++]=0,u[s++]=1,u[s++]=-1,u[s++]=1,u[s++]=0,u[s++]=-1,u[s++]=0,u[s++]=0,u[s++]=-1,u[s++]=0,u[s++]=1,u[s++]=-1,u[s++]=1,u[s++]=1,u[s++]=-1,u[s++]=0,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=1,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=0,u[s++]=0,u[s++]=0,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=1,u[s++]=1,u[s++]=1,u[s++]=1,u[s++]=0,u[s++]=0,u[s++]=1,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=1,u[s++]=1,u[s++]=1,u[s++]=0,u[s++]=1,u[s++]=1,o.st=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:u})}if(r.tangent){var y=new Float32Array(72);y[0]=1,y[1]=0,y[2]=0,y[3]=1,y[4]=0,y[5]=0,y[6]=1,y[7]=0,y[8]=0,y[9]=1,y[10]=0,y[11]=0,y[12]=-1,y[13]=0,y[14]=0,y[15]=-1,y[16]=0,y[17]=0,y[18]=-1,y[19]=0,y[20]=0,y[21]=-1,y[22]=0,y[23]=0,y[24]=0,y[25]=1,y[26]=0,y[27]=0,y[28]=1,y[29]=0,y[30]=0,y[31]=1,y[32]=0,y[33]=0,y[34]=1,y[35]=0,y[36]=0,y[37]=-1,y[38]=0,y[39]=0,y[40]=-1,y[41]=0,y[42]=0,y[43]=-1,y[44]=0,y[45]=0,y[46]=-1,y[47]=0,y[48]=-1,y[49]=0,y[50]=0,y[51]=-1,y[52]=0,y[53]=0,y[54]=-1,y[55]=0,y[56]=0,y[57]=-1,y[58]=0,y[59]=0,y[60]=1,y[61]=0,y[62]=0,y[63]=1,y[64]=0,y[65]=0,y[66]=1,y[67]=0,y[68]=0,y[69]=1,y[70]=0,y[71]=0,o.tangent=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})}if(r.bitangent){var f=new Float32Array(72);f[0]=0,f[1]=1,f[2]=0,f[3]=0,f[4]=1,f[5]=0,f[6]=0,f[7]=1,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=1,f[14]=0,f[15]=0,f[16]=1,f[17]=0,f[18]=0,f[19]=1,f[20]=0,f[21]=0,f[22]=1,f[23]=0,f[24]=0,f[25]=0,f[26]=1,f[27]=0,f[28]=0,f[29]=1,f[30]=0,f[31]=0,f[32]=1,f[33]=0,f[34]=0,f[35]=1,f[36]=0,f[37]=0,f[38]=1,f[39]=0,f[40]=0,f[41]=1,f[42]=0,f[43]=0,f[44]=1,f[45]=0,f[46]=0,f[47]=1,f[48]=0,f[49]=0,f[50]=1,f[51]=0,f[52]=0,f[53]=1,f[54]=0,f[55]=0,f[56]=1,f[57]=0,f[58]=0,f[59]=1,f[60]=0,f[61]=0,f[62]=1,f[63]=0,f[64]=0,f[65]=1,f[66]=0,f[67]=0,f[68]=1,f[69]=0,f[70]=0,f[71]=1,o.bitangent=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})}(n=new Uint16Array(36))[0]=0,n[1]=1,n[2]=2,n[3]=0,n[4]=2,n[5]=3,n[6]=6,n[7]=5,n[8]=4,n[9]=7,n[10]=6,n[11]=4,n[12]=8,n[13]=9,n[14]=10,n[15]=8,n[16]=10,n[17]=11,n[18]=14,n[19]=13,n[20]=12,n[21]=15,n[22]=14,n[23]=12,n[24]=18,n[25]=17,n[26]=16,n[27]=19,n[28]=18,n[29]=16,n[30]=20,n[31]=21,n[32]=22,n[33]=20,n[34]=22,n[35]=23}else(i=new Float64Array(24))[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=a.x,i[4]=t.y,i[5]=t.z,i[6]=a.x,i[7]=a.y,i[8]=t.z,i[9]=t.x,i[10]=a.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=a.z,i[15]=a.x,i[16]=t.y,i[17]=a.z,i[18]=a.x,i[19]=a.y,i[20]=a.z,i[21]=t.x,i[22]=a.y,i[23]=a.z,o.position=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i}),(n=new Uint16Array(36))[0]=4,n[1]=5,n[2]=6,n[3]=4,n[4]=6,n[5]=7,n[6]=1,n[7]=0,n[8]=3,n[9]=1,n[10]=3,n[11]=2,n[12]=1,n[13]=6,n[14]=5,n[15]=1,n[16]=2,n[17]=6,n[18]=2,n[19]=3,n[20]=7,n[21]=2,n[22]=7,n[23]=6,n[24]=3,n[25]=0,n[26]=4,n[27]=3,n[28]=4,n[29]=7,n[30]=0,n[31]=1,n[32]=5,n[33]=0,n[34]=5,n[35]=4;var p=A.Cartesian3.subtract(a,t,k),c=.5*A.Cartesian3.magnitude(p);if(l.defined(e._offsetAttribute)){var x=i.length,b=new Uint8Array(x/3),d=e._offsetAttribute===g.GeometryOffsetAttribute.NONE?0:1;F.arrayFill(b,d),o.applyOffset=new h.GeometryAttribute({componentDatatype:v.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:b})}return new h.Geometry({attributes:o,indices:n,primitiveType:z.PrimitiveType.TRIANGLES,boundingSphere:new C.BoundingSphere(A.Cartesian3.ZERO,c),offsetAttribute:e._offsetAttribute})}},s.getUnitBox=function(){return l.defined(t)||(t=s.createGeometry(s.fromDimensions({dimensions:new A.Cartesian3(1,1,1),vertexFormat:u.VertexFormat.POSITION_ONLY}))),t},e.BoxGeometry=s});