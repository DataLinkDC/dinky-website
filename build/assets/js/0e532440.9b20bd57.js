"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,N=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return t?a.createElement(N,i(i({ref:n},o),{},{components:t})):a.createElement(N,i({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2970:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],s={sidebar_position:3,id:"datasource",title:"\u6269\u5c55\u6570\u636e\u6e90"},u=void 0,m={unversionedId:"extend/function_expansion/datasource",id:"extend/function_expansion/datasource",title:"\u6269\u5c55\u6570\u636e\u6e90",description:"Dinky \u6570\u636e\u6e90\u9075\u5faa SPI,\u53ef\u968f\u610f\u6269\u5c55\u6240\u9700\u8981\u7684\u6570\u636e\u6e90\u3002\u6570\u636e\u6e90\u6269\u5c55\u53ef\u5728 dlink-metadata \u6a21\u5757\u4e2d\u8fdb\u884c\u53ef\u63d2\u62d4\u5f0f\u6269\u5c55\u3002\u73b0\u5df2\u7ecf\u652f\u6301\u7684\u6570\u636e\u6e90\u5305\u62ec\u5982\u4e0b\uff1a",source:"@site/docs/extend/function_expansion/datasource.md",sourceDirName:"extend/function_expansion",slug:"/extend/function_expansion/datasource",permalink:"/docs/next/extend/function_expansion/datasource",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/docs/extend/function_expansion/datasource.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"datasource",title:"\u6269\u5c55\u6570\u636e\u6e90"},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55\u8fde\u63a5\u5668",permalink:"/docs/next/extend/function_expansion/connector"},next:{title:"\u6269\u5c55\u62a5\u8b66\u63d2\u4ef6",permalink:"/docs/next/extend/function_expansion/alert"}},o={},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u540e\u7aef\u5f00\u53d1",id:"\u540e\u7aef\u5f00\u53d1",level:2},{value:"\u524d\u7aef\u5f00\u53d1",id:"\u524d\u7aef\u5f00\u53d1",level:2}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Dinky \u6570\u636e\u6e90\u9075\u5faa SPI,\u53ef\u968f\u610f\u6269\u5c55\u6240\u9700\u8981\u7684\u6570\u636e\u6e90\u3002\u6570\u636e\u6e90\u6269\u5c55\u53ef\u5728 dlink-metadata \u6a21\u5757\u4e2d\u8fdb\u884c\u53ef\u63d2\u62d4\u5f0f\u6269\u5c55\u3002\u73b0\u5df2\u7ecf\u652f\u6301\u7684\u6570\u636e\u6e90\u5305\u62ec\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MySQL"),(0,l.kt)("li",{parentName:"ul"},"Oracle"),(0,l.kt)("li",{parentName:"ul"},"SQLServer"),(0,l.kt)("li",{parentName:"ul"},"PostGreSQL"),(0,l.kt)("li",{parentName:"ul"},"Phoenix"),(0,l.kt)("li",{parentName:"ul"},"Doris(Starrocks)"),(0,l.kt)("li",{parentName:"ul"},"ClickHouse "),(0,l.kt)("li",{parentName:"ul"},"Hive ",(0,l.kt)("inlineCode",{parentName:"li"},"\u9700\u8981\u7684jar\u5305: hive-jdbc-2.1.1.jar && hive-service-2.1.1.jar"))),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u6570\u636e\u6e90,\u8be6\u89c1\u6ce8\u518c\u4e2d\u5fc3",(0,l.kt)("a",{parentName:"p",href:"../../../administrator_guide/register_center/datasource_manage"},"\u6570\u636e\u6e90\u7ba1\u7406"),",\u914d\u7f6e\u6570\u636e\u6e90\u8fde\u63a5"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"  Dinky \u4e0d\u5728\u5bf9 Starorcks \u8fdb\u884c\u989d\u5916\u6269\u5c55\uff0cDoris \u548c Starorcks \u5e95\u5c42\u5e76\u65e0\u5dee\u522b\uff0c\u539f\u5219\u4e0a\u53ea\u662f\u529f\u80fd\u533a\u5206\u3002\u7ecf\u793e\u533a\u6d4b\u8bd5\u9a8c\u8bc1\uff0c\u53ef\u91c7\u7528 Doris \u6269\u5c55\u8fde\u63a5 Starrocks\u3002"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u5730\u5f00\u53d1\u73af\u5883\u642d\u5efa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"li",href:"../../../developer_guide/local_debug"},"\u5f00\u53d1\u8005\u672c\u5730\u8c03\u8bd5\u624b\u518c"))))),(0,l.kt)("h2",{id:"\u540e\u7aef\u5f00\u53d1"},"\u540e\u7aef\u5f00\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u6587\u4ee5 Hive \u6570\u636e\u6e90\u6269\u5c55\u4e3a\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"dlink-metadata")," \u6a21\u5757\u4e2d\uff0c \u53f3\u952e",(0,l.kt)("strong",{parentName:"li"},"\u65b0\u5efa\u5b50\u6a21\u5757"),", \u547d\u540d\u89c4\u5219: ",(0,l.kt)("strong",{parentName:"li"},"dlink-metadata-{\u6570\u636e\u6e90\u540d\u79f0}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u5c42\u9762"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u4e8b\u9879: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u5728\u7236\u7c7b\u7684\u57fa\u7840\u4e0a\u4fee\u6539\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728\u5b50\u7c7b\u4e2d\u8fdb\u884c\u6269\u5c55 ,\u6216\u8005\u91cd\u5199\u7236\u7c7b\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55\u6570\u636e\u6e90\u9700\u8981\u540c\u65f6\u63d0\u4ea4",(0,l.kt)("strong",{parentName:"li"},"\u6d4b\u8bd5\u7528\u4f8b")))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6b64\u6a21\u5757\u7684 ",(0,l.kt)("strong",{parentName:"li"},"pom.xml")," \u4e2d\uff0c\u6dfb\u52a0\u6240\u9700\u4f9d\u8d56, \u9700\u8981\u6ce8\u610f\u7684\u662f : \u6570\u636e\u6e90\u672c\u8eab\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"JDBC"),"\u7684 jar \u4e0d\u8981\u5305\u542b\u5728\u6253\u5305\u4e2d , \u800c\u662f\u540e\u7eed\u90e8\u7f72\u65f6,\u6dfb\u52a0\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"plugins")," \u4e0b"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u6b64\u6a21\u5757\u7684 ",(0,l.kt)("strong",{parentName:"li"},"resource")," \u4e0b \u65b0\u5efa\u5305 ",(0,l.kt)("inlineCode",{parentName:"li"},"META-INF.services")," , \u5728\u6b64\u5305\u4e2d\u65b0\u5efa\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"com.dlink.metadata.driver.Driver")," \u5185\u5bb9\u5982\u4e0b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"com.dlink.metadata.driver.\u6570\u636e\u6e90\u7c7b\u578bDriver"),"\n\u57fa\u7840\u5305:")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u9876\u5c42\u5305\u540d\u5b9a\u4e49: com.dlink.metadata\n  \u5b50\u5305\u542b\u4e49:\n    - constant: \u5e38\u91cf\u5b9a\u4e49 \u76ee\u524d\u6b64\u6a21\u5757\u4e2d\u4e3b\u8981\u5b9a\u4e49\u5404\u79cd\u52a8\u6001\u6784\u5efa\u7684\u6267\u884c SQL \n    - convert: \u5b58\u653e\u6570\u636e\u6e90\u7684\u6570\u636e\u7c7b\u578b<->Java \u7c7b\u578b\u7684\u8f6c\u6362\u7c7b ps: \u53ef\u4ee5\u4e0d\u5b9a\u4e49 \u4e0d\u5b9a\u4e49\u4f7f\u7528 dlink-metadata-base \u7684\u9ed8\u8ba4\u8f6c\u6362 \u5373\u8c03\u7528\u7236\u7c7b\u7684\u65b9\u6cd5\n    - driver: \u5b58\u653e\u6570\u636e\u6e90\u9a71\u52a8\u7c7b,\u83b7\u53d6\u5143\u6570\u636e\u7684\u4e3b\u8981\u7c7b,\u7c7b extends AbstractJdbcDriver implements Driver \n    - query : \u5b58\u653e\u89e3\u6790\u83b7\u53d6\u5143\u6570\u636e\u7684\u4e3b\u8981\u7c7b,\u7c7b extends AbstractDBQuery \u65b9\u6cd5\u4e0d\u91cd\u5199 \u9ed8\u8ba4\u4f7f\u7528\u7236\u7c7b\n")),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b:"),(0,l.kt)("p",null,"HiveConstant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public interface HiveConstant {\n\n    /**\n     * \u67e5\u8be2\u6240\u6709database\n     */\n    String QUERY_ALL_DATABASE = " show databases";\n    /**\n     * \u67e5\u8be2\u6240\u6709schema\u4e0b\u7684\u6240\u6709\u8868\n     */\n    String QUERY_ALL_TABLES_BY_SCHEMA = "show tables";\n    /**\n     * \u6269\u5c55\u4fe1\u606fKey\n     */\n    String DETAILED_TABLE_INFO = "Detailed Table Information";\n    /**\n     * \u67e5\u8be2\u6307\u5b9aschema.table\u7684\u6269\u5c55\u4fe1\u606f\n     */\n    String QUERY_TABLE_SCHEMA_EXTENED_INFOS = " describe extended `%s`.`%s`";\n    /**\n     * \u67e5\u8be2\u6307\u5b9aschema.table\u7684\u4fe1\u606f \u5217 \u5217\u7c7b\u578b \u5217\u6ce8\u91ca\n     */\n    String QUERY_TABLE_SCHEMA = " describe `%s`.`%s`";\n    /**\n     * \u4f7f\u7528 DB\n     */\n    String USE_DB = "use `%s`";\n    /**\n     * \u53ea\u67e5\u8be2\u6307\u5b9aschema.table\u7684\u5217\u540d\n     */\n    String QUERY_TABLE_COLUMNS_ONLY = "show columns in `%s`.`%s`";\n}\n\n')),(0,l.kt)("p",null,"HiveTypeConvert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class HiveTypeConvert implements ITypeConvert {\n    // \u4e3b\u8981\u662f\u5c06\u83b7\u53d6\u5230\u7684\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a Java \u6570\u636e\u7c7b\u578b\u7684\u6620\u5c04 \u5b58\u50a8\u5728 Column \u4e2d , \u6b64\u5904\u6839\u636e\u6269\u5c55\u7684\u6570\u636e\u6e90\u7279\u6027\u8fdb\u884c\u4fee\u6539  \n    @Override\n    public ColumnType convert(Column column) {\n        if (Asserts.isNull(column)) {\n            return ColumnType.STRING;\n        }\n        String t = column.getType().toLowerCase().trim();\n        if (t.contains("char")) {\n            return ColumnType.STRING;\n        } else if (t.contains("boolean")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_BOOLEAN;\n            }\n            return ColumnType.BOOLEAN;\n        } else if (t.contains("tinyint")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_BYTE;\n            }\n            return ColumnType.BYTE;\n        } else if (t.contains("smallint")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_SHORT;\n            }\n            return ColumnType.SHORT;\n        } else if (t.contains("bigint")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_LONG;\n            }\n            return ColumnType.LONG;\n        } else if (t.contains("largeint")) {\n            return ColumnType.STRING;\n        } else if (t.contains("int")) {\n            if (column.isNullable()) {\n                return ColumnType.INTEGER;\n            }\n            return ColumnType.INT;\n        } else if (t.contains("float")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_FLOAT;\n            }\n            return ColumnType.FLOAT;\n        } else if (t.contains("double")) {\n            if (column.isNullable()) {\n                return ColumnType.JAVA_LANG_DOUBLE;\n            }\n            return ColumnType.DOUBLE;\n        } else if (t.contains("timestamp")) {\n            return ColumnType.TIMESTAMP;\n        } else if (t.contains("date")) {\n            return ColumnType.STRING;\n        } else if (t.contains("datetime")) {\n            return ColumnType.STRING;\n        } else if (t.contains("decimal")) {\n            return ColumnType.DECIMAL;\n        } else if (t.contains("time")) {\n            return ColumnType.DOUBLE;\n        }\n        return ColumnType.STRING;\n    }\n\n    // \u8f6c\u6362\u4e3a DB \u7684\u6570\u636e\u7c7b\u578b \n    @Override\n    public String convertToDB(ColumnType columnType) {\n        switch (columnType) {\n            case STRING:\n                return "varchar";\n            case BOOLEAN:\n            case JAVA_LANG_BOOLEAN:\n                return "boolean";\n            case BYTE:\n            case JAVA_LANG_BYTE:\n                return "tinyint";\n            case SHORT:\n            case JAVA_LANG_SHORT:\n                return "smallint";\n            case LONG:\n            case JAVA_LANG_LONG:\n                return "bigint";\n            case FLOAT:\n            case JAVA_LANG_FLOAT:\n                return "float";\n            case DOUBLE:\n            case JAVA_LANG_DOUBLE:\n                return "double";\n            case DECIMAL:\n                return "decimal";\n            case INT:\n            case INTEGER:\n                return "int";\n            case TIMESTAMP:\n                return "timestamp";\n            default:\n                return "varchar";\n        }\n    }\n}\n\n\n')),(0,l.kt)("p",null,"HiveDriver"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class HiveDriver extends AbstractJdbcDriver implements Driver {\n    // \u83b7\u53d6\u8868\u7684\u4fe1\u606f\n    @Override\n    public Table getTable(String schemaName, String tableName) {\n        List<Table> tables = listTables(schemaName);\n        Table table = null;\n        for (Table item : tables) {\n            if (Asserts.isEquals(item.getName(), tableName)) {\n                table = item;\n                break;\n            }\n        }\n        if (Asserts.isNotNull(table)) {\n            table.setColumns(listColumns(schemaName, table.getName()));\n        }\n        return table;\n    }\n    \n    \n//    \u6839\u636e\u5e93\u540d\u79f0\u83b7\u53d6\u8868\u7684\u4fe1\u606f\n    @Override\n    public List<Table> listTables(String schemaName) {\n        List<Table> tableList = new ArrayList<>();\n        PreparedStatement preparedStatement = null;\n        ResultSet results = null;\n        IDBQuery dbQuery = getDBQuery();\n        String sql = dbQuery.tablesSql(schemaName);\n        try {\n            //\u6b64\u6b65\u9aa4\u662f\u4e3a\u4e86\u5207\u6362\u6570\u636e\u5e93    \u4e0e\u5176\u4ed6\u6570\u636e\u6e90\u6709\u6240\u533a\u522b \n            execute(String.format(HiveConstant.USE_DB, schemaName));\n            preparedStatement = conn.prepareStatement(sql);\n            results = preparedStatement.executeQuery();\n            ResultSetMetaData metaData = results.getMetaData();\n            List<String> columnList = new ArrayList<>();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                columnList.add(metaData.getColumnLabel(i));\n            }\n            while (results.next()) {\n                String tableName = results.getString(dbQuery.tableName());\n                if (Asserts.isNotNullString(tableName)) {\n                    Table tableInfo = new Table();\n                    tableInfo.setName(tableName);\n                    if (columnList.contains(dbQuery.tableComment())) {\n                        tableInfo.setComment(results.getString(dbQuery.tableComment()));\n                    }\n                    tableInfo.setSchema(schemaName);\n                    if (columnList.contains(dbQuery.tableType())) {\n                        tableInfo.setType(results.getString(dbQuery.tableType()));\n                    }\n                    if (columnList.contains(dbQuery.catalogName())) {\n                        tableInfo.setCatalog(results.getString(dbQuery.catalogName()));\n                    }\n                    if (columnList.contains(dbQuery.engine())) {\n                        tableInfo.setEngine(results.getString(dbQuery.engine()));\n                    }\n                    tableList.add(tableInfo);\n                }\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            close(preparedStatement, results);\n        }\n        return tableList;\n    }\n\n    //\u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93 \u548c \u5e93\u4e0b\u6240\u6709\u8868\n    @Override\n    public List<Schema> getSchemasAndTables() {\n        return listSchemas();\n    }\n\n    //\u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\n    @Override\n    public List<Schema> listSchemas() {\n\n        List<Schema> schemas = new ArrayList<>();\n        PreparedStatement preparedStatement = null;\n        ResultSet results = null;\n        String schemasSql = getDBQuery().schemaAllSql();\n        try {\n            preparedStatement = conn.prepareStatement(schemasSql);\n            results = preparedStatement.executeQuery();\n            while (results.next()) {\n                String schemaName = results.getString(getDBQuery().schemaName());\n                if (Asserts.isNotNullString(schemaName)) {\n                    Schema schema = new Schema(schemaName);\n                    if (execute(String.format(HiveConstant.USE_DB, schemaName))) {\n                        // \u83b7\u53d6\u5e93\u4e0b\u7684\u6240\u6709\u8868 \u5b58\u50a8\u5230schema\u4e2d\n                        schema.setTables(listTables(schema.getName()));\n                    }\n                    schemas.add(schema);\n                }\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            close(preparedStatement, results);\n        }\n        return schemas;\n    }\n\n    // \u6839\u636e\u5e93\u540d\u8868\u540d\u83b7\u53d6\u8868\u7684\u5217\u4fe1\u606f    \n    @Override\n    public List<Column> listColumns(String schemaName, String tableName) {\n        List<Column> columns = new ArrayList<>();\n        PreparedStatement preparedStatement = null;\n        ResultSet results = null;\n        IDBQuery dbQuery = getDBQuery();\n        String tableFieldsSql = dbQuery.columnsSql(schemaName, tableName);\n        try {\n            preparedStatement = conn.prepareStatement(tableFieldsSql);\n            results = preparedStatement.executeQuery();\n            ResultSetMetaData metaData = results.getMetaData();\n            List<String> columnList = new ArrayList<>();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                columnList.add(metaData.getColumnLabel(i));\n            }\n            Integer positionId = 1;\n            while (results.next()) {\n                Column field = new Column();\n                if (StringUtils.isEmpty(results.getString(dbQuery.columnName()))) {\n                    break;\n                } else {\n                    if (columnList.contains(dbQuery.columnName())) {\n                        String columnName = results.getString(dbQuery.columnName());\n                        field.setName(columnName);\n                    }\n                    if (columnList.contains(dbQuery.columnType())) {\n                        field.setType(results.getString(dbQuery.columnType()));\n                    }\n                    if (columnList.contains(dbQuery.columnComment()) && Asserts.isNotNull(results.getString(dbQuery.columnComment()))) {\n                        String columnComment = results.getString(dbQuery.columnComment()).replaceAll("\\"|\'", "");\n                        field.setComment(columnComment);\n                    }\n                    field.setPosition(positionId++);\n                    field.setJavaType(getTypeConvert().convert(field));\n                }\n                columns.add(field);\n            }\n        } catch (SQLException e) {\n            e.printStackTrace();\n        } finally {\n            close(preparedStatement, results);\n        }\n        return columns;\n    }\n\n    //\u83b7\u53d6\u5efa\u8868\u7684SQL\n    @Override\n    public String getCreateTableSql(Table table) {\n        StringBuilder createTable = new StringBuilder();\n        PreparedStatement preparedStatement = null;\n        ResultSet results = null;\n        String createTableSql = getDBQuery().createTableSql(table.getSchema(), table.getName());\n        try {\n            preparedStatement = conn.prepareStatement(createTableSql);\n            results = preparedStatement.executeQuery();\n            while (results.next()) {\n                createTable.append(results.getString(getDBQuery().createTableName())).append("\\n");\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            close(preparedStatement, results);\n        }\n        return createTable.toString();\n    }\n    \n    @Override\n    public int executeUpdate(String sql) throws Exception {\n        Asserts.checkNullString(sql, "Sql \u8bed\u53e5\u4e3a\u7a7a");\n        String querySQL = sql.trim().replaceAll(";$", "");\n        int res = 0;\n        try (Statement statement = conn.createStatement()) {\n            res = statement.executeUpdate(querySQL);\n        }\n        return res;\n    }\n\n    @Override\n    public JdbcSelectResult query(String sql, Integer limit) {\n        if (Asserts.isNull(limit)) {\n            limit = 100;\n        }\n        JdbcSelectResult result = new JdbcSelectResult();\n        List<LinkedHashMap<String, Object>> datas = new ArrayList<>();\n        List<Column> columns = new ArrayList<>();\n        List<String> columnNameList = new ArrayList<>();\n        PreparedStatement preparedStatement = null;\n        ResultSet results = null;\n        int count = 0;\n        try {\n            String querySQL = sql.trim().replaceAll(";$", "");\n            preparedStatement = conn.prepareStatement(querySQL);\n            results = preparedStatement.executeQuery();\n            if (Asserts.isNull(results)) {\n                result.setSuccess(true);\n                close(preparedStatement, results);\n                return result;\n            }\n            ResultSetMetaData metaData = results.getMetaData();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                columnNameList.add(metaData.getColumnLabel(i));\n                Column column = new Column();\n                column.setName(metaData.getColumnLabel(i));\n                column.setType(metaData.getColumnTypeName(i));\n                column.setAutoIncrement(metaData.isAutoIncrement(i));\n                column.setNullable(metaData.isNullable(i) == 0 ? false : true);\n                column.setJavaType(getTypeConvert().convert(column));\n                columns.add(column);\n            }\n            result.setColumns(columnNameList);\n            while (results.next()) {\n                LinkedHashMap<String, Object> data = new LinkedHashMap<>();\n                for (int i = 0; i < columns.size(); i++) {\n                    data.put(columns.get(i).getName(), getTypeConvert().convertValue(results, columns.get(i).getName(), columns.get(i).getType()));\n                }\n                datas.add(data);\n                count++;\n                if (count >= limit) {\n                    break;\n                }\n            }\n            result.setSuccess(true);\n        } catch (Exception e) {\n            result.setError(LogUtil.getError(e));\n            result.setSuccess(false);\n        } finally {\n            close(preparedStatement, results);\n            result.setRowData(datas);\n            return result;\n        }    }\n\n    @Override\n    public IDBQuery getDBQuery() {\n        return new HiveQuery();\n    }\n\n    @Override\n    public ITypeConvert getTypeConvert() {\n        return new HiveTypeConvert();\n    }\n\n    // \u83b7\u53d6\u9a71\u52a8\u7c7b\n    @Override\n    String getDriverClass() {\n        return "org.apache.hive.jdbc.HiveDriver";\n    }\n\n    // \u6539\u6570\u636e\u6e90\u8868\u7684\u7c7b\u578b  \u6b64\u5904\u5fc5\u987b\n    @Override\n    public String getType() {\n        return "Hive";\n    }\n    // \u6539\u6570\u636e\u6e90\u8868\u7684\u540d\u79f0  \u6b64\u5904\u5fc5\u987b\n    @Override\n    public String getName() {\n        return "Hive";\n    }\n\n    // \u6620\u5c04 Flink \u7684\u6570\u636e\u7c7b\u578b\n    @Override\n    public Map<String, String> getFlinkColumnTypeConversion() {\n        HashMap<String, String> map = new HashMap<>();\n        map.put("BOOLEAN", "BOOLEAN");\n        map.put("TINYINT", "TINYINT");\n        map.put("SMALLINT", "SMALLINT");\n        map.put("INT", "INT");\n        map.put("VARCHAR", "STRING");\n        map.put("TEXY", "STRING");\n        map.put("INT", "INT");\n        map.put("DATETIME", "TIMESTAMP");\n        return map;\n    }\n}\n\n\n\n')),(0,l.kt)("p",null,"HiveQuery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n\npublic class HiveQuery extends AbstractDBQuery {\n    // \u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\u7684\u67e5\u8be2SQL \u9700\u8981\u4e0e \u5e38\u91cf\u7c7b(HiveConstant) \u8054\u5408\u4f7f\u7528\n    @Override\n    public String schemaAllSql() {\n        return HiveConstant.QUERY_ALL_DATABASE;\n    }\n\n    // \u83b7\u53d6\u5e93\u4e0b\u7684\u6240\u6709\u8868\u7684SQL \u9700\u8981\u4e0e \u5e38\u91cf\u7c7b(HiveConstant) \u8054\u5408\u4f7f\u7528\n    @Override\n    public String tablesSql(String schemaName) {\n        return HiveConstant.QUERY_ALL_TABLES_BY_SCHEMA;\n    }\n    \n    // \u52a8\u6001\u6784\u5efa\u83b7\u53d6\u8868\u7684\u6240\u6709\u5217\u7684SQL \u9700\u8981\u4e0e \u5e38\u91cf\u7c7b(HiveConstant) \u8054\u5408\u4f7f\u7528\n    @Override\n    public String columnsSql(String schemaName, String tableName) {\n        return String.format(HiveConstant.QUERY_TABLE_SCHEMA, schemaName, tableName);\n    }\n    \n    // \u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\u7684 result title\n    @Override\n    public String schemaName() {\n        return "database_name";\n    }\n\n    // \u83b7\u53d6\u5efa\u8868\u8bed\u53e5\u7684 result title\n    @Override\n    public String createTableName() {\n        return "createtab_stmt";\n    }\n\n    // \u83b7\u53d6\u6240\u6709\u8868\u7684 result title\n    @Override\n    public String tableName() {\n        return "tab_name";\n    }\n    \n    // \u83b7\u53d6\u8868\u6ce8\u91ca\u7684 result title\n    @Override\n    public String tableComment() {\n        return "comment";\n    }\n\n    // \u83b7\u53d6\u5217\u540d\u7684 result title\n    @Override\n    public String columnName() {\n        return "col_name";\n    }\n\n    // \u83b7\u53d6\u5217\u7684\u6570\u636e\u7c7b\u578b\u7684  result title\n    @Override\n    public String columnType() {\n        return "data_type";\n    }\n\n    // \u83b7\u53d6\u5217\u6ce8\u91ca\u7684 result title\n    @Override\n    public String columnComment() {\n        return "comment";\n    }\n\n}\n\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0a\u4ee3\u7801\u5f00\u53d1\u5b8c\u6210 \u5728\u6b64\u6a21\u5757\u4e0b\u8fdb\u884c\u6d4b\u8bd5  \u5efa\u8bae\u4f7f\u7528\u5355\u5143\u6d4b\u8bd5\u8fdb\u884c\u6d4b\u8bd5 , \u5982\u60a8 PR , \u5219\u6d4b\u8bd5\u7528\u4f8b\u5fc5\u987b\u63d0\u4ea4,\u540c\u65f6\u9700\u8981\u6ce8\u610f\u654f\u611f\u4fe1\u606f\u7684\u5904\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ec5\u4ec5\u4e0a\u8ff0\u7684\u4ee3\u7801\u53ef\u77e5 Dinky \u7684\u4ee3\u7801\u6269\u5c55\u6027\u6781\u5f3a , \u53ef\u6839\u636e\u6570\u636e\u6e90\u7684\u7279\u6027\u968f\u65f6\u91cd\u5199\u7236\u7c7b\u7684\u65b9\u6cd5 , \u8fdb\u800c\u8f7b\u677e\u5b9e\u73b0\u6269\u5c55"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0a\u8ff0\u8fc7\u7a0b \u6d4b\u8bd5\u6ca1\u6709\u95ee\u9898 \u9700\u8981\u6574\u5408\u8fdb\u5165\u9879\u76ee\u4e2d , \u8bf7\u770b\u4ee5\u4e0b\u6b65\u9aa4:"),(0,l.kt)("li",{parentName:"ul"},"\u6253\u5305\u76f8\u5173\u914d\u7f6e \u4fee\u6539\u5982\u4e0b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"dlink-core")," \u6a21\u5757\u7684 ",(0,l.kt)("strong",{parentName:"li"},"pom.xml")," \u4e0b , \u627e\u5230\u6269\u5c55\u6570\u636e\u6e90\u76f8\u5173\u7684\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u653e\u5728\u4e00\u8d77\u65b9\u4fbf\u7ba1\u7406")," \u5e76\u4e14\u65b0\u589e\u5982\u4e0b\u5185\u5bb9:")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.dlink</groupId>\n            <artifactId>\u6a21\u5757\u540d\u79f0</artifactId>\n            <scope>${scope.runtime}</scope>\n        </dependency>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"dlink")," \u6839\u4e0b ",(0,l.kt)("strong",{parentName:"li"},"pom.xml")," \u4e2d ,\u65b0\u589e\u5982\u4e0b\u5185\u5bb9:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.dlink</groupId>\n            <artifactId>\u6a21\u5757\u540d\u79f0</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"dlink-assembly")," \u6a21\u5757\u4e2d , \u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.xml")," \u8def\u5f84: ",(0,l.kt)("strong",{parentName:"li"},"/dlink-assembly/src/main/assembly/package.xml")," , \u65b0\u589e\u5982\u4e0b\u5185\u5bb9:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"        <fileSet>\n            <directory>${project.parent.basedir}/dlink-metadata/\u6a21\u5757\u540d\u79f0/target\n            </directory>\n            <outputDirectory>lib</outputDirectory>\n            <includes>\n                <include>\u6a21\u5757\u540d\u79f0-${project.version}.jar</include>\n            </includes>\n        </fileSet>\n")),(0,l.kt)("p",null,"\u81f3\u6b64 \u5982\u60a8\u7684\u4ee3\u7801\u6ca1\u6709\u95ee\u9898\u7684\u8bdd \u540e\u7aef\u4ee3\u7801\u6269\u5c55\u5c31\u5df2\u7ecf\u5b8c\u6210\u4e86 !"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u524d\u7aef\u5f00\u53d1"},"\u524d\u7aef\u5f00\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dlink-web")," \u4e3a Dinky \u7684\u524d\u7aef\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55\u6570\u636e\u6e90\u76f8\u5173\u8868\u5355\u6240\u5728\u8def\u5f84: ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/src/pages/DataBase/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/src/pages/DataBase/components/DBForm.tsx")," \u7684 ",(0,l.kt)("strong",{parentName:"li"},"const data")," \u4e2d \u6dfb\u52a0\u5982\u4e0b:\neg:")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"         {\n           type: 'Hive', \n         },\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe:\n",(0,l.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/function_expansion/datasource/extened_datasource_dbform.jpg",alt:"extened_datasource_dbform"})),(0,l.kt)("p",null,"\u6ce8\u610f: ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6b64\u5904\u6570\u636e\u6e90\u7c7b\u578b\u9075\u7167\u5927\u9a7c\u5cf0\u547d\u540d\u89c4\u5219")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6570\u636e\u6e90logo\u56fe\u7247",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8def\u5f84: ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/public/database/")),(0,l.kt)("li",{parentName:"ul"},"logo \u56fe\u4e0b\u8f7d\u53c2\u8003: ",(0,l.kt)("a",{parentName:"li",href:"https://www.iconfont.cn"},"https://www.iconfont.cn")," "),(0,l.kt)("li",{parentName:"ul"},"logo \u56fe\u7247\u5b58\u653e\u4f4d\u7f6e: ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/public/database"),"   "))),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/src/pages/DataBase/DB.ts")," , \u6dfb\u52a0\u5982\u4e0b:\neg:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    case 'hive':  \n      imageUrl += 'hive.png'; # \u9700\u8981\u548c\u6dfb\u52a0\u7684\u56fe\u7247\u540d\u79f0\u4fdd\u6301\u4e00\u81f4\n      break;\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe:\n",(0,l.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/function_expansion/datasource/extened_datasource_datasourceform.jpg",alt:"extened_datasource_datasourceform"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u636e\u6e90\u76f8\u5173\u8868\u5355\u5c5e\u6027\u5728: ",(0,l.kt)("inlineCode",{parentName:"li"},"dlink-web/src/pages/DataBase/components/DataBaseForm.tsx")," \u6b64\u5904\u65e0\u9700\u4fee\u6539")),(0,l.kt)("hr",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8bf4\u660e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u81f3\u6b64 , \u57fa\u4e8e Dinky \u6269\u5c55\u6570\u636e\u6e90\u5b8c\u6210 , \u5982\u60a8\u4e5f\u6709\u6269\u5c55\u9700\u6c42 ,\u8bf7\u53c2\u7167\u5982\u4f55 ",(0,l.kt)("a",{parentName:"p",href:"../../../developer_guide/contribution/issue"},"[Issuse]"),"  \u548c\u5982\u4f55  ",(0,l.kt)("a",{parentName:"p",href:"../../../developer_guide/contribution/pull_request"},"[\u63d0\u4ea4 PR]")))))}d.isMDXComponent=!0}}]);