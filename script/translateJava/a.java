package com.wiz.soundai.speech.domain.dto;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotNull;
import java.util.Date;




/**
 * 话术组件
 */
@Getter
@Setter
@ApiModel
public class BizSpeechComponentDTO {

    private Long id;

    @ApiModelProperty("数组的吧")
    @NotNull(message = "crm.calltaskexceptioncode.parameterisnull")
    private List<BizTagPropertyDTO> bizTagPropertyDTOS;

     @ApiModelProperty("周鑫对象")
     private BizTagPropertyDTO bizTagPropertyDTO;


    @ApiModelProperty("话术id")
    @NotNull(message = "crm.calltaskexceptioncode.parameterisnull")
    private Lss speechId;



    @ApiModelProperty("话术模板code")
    private String templateCode;

    @ApiModelProperty("组件名称")
    private String name;

    @ApiModelProperty("拷贝的源组件id")
    private String sourceUuid;

    @ApiModelProperty("父组件id(该字段为空，则代表组件是顶层组件)")
    private String parentUuid;

    @ApiModelProperty("组件内的连线关系")
    private JSONObject routes;

    @ApiModelProperty("组件的入口")
    private JSONObject inboundPorts;

    @ApiModelProperty("组件的出口")
    private JSONObject outboundPorts;

    @ApiModelProperty("画布节点信息")
    private JSONObject details;

    @ApiModelProperty("组件内业务数据反向索引(应用层维护)")
    private JSONObject dataExpansion;

    @ApiModelProperty("组件所用的nlu模型配置")
    private JSONObject nluConf;

    @ApiModelProperty("编辑状态（1:未完成 2：已完成）")
    private Integer editStatus;

    /**
     * 排序
     */
    private Integer sortIndex;

    @ApiModelProperty("组件使用状态（1：未使用，2：已使用）")
    private Integer useStatus;

    @ApiModelProperty("1:非引用组件 （p1阶段默认为1）")
    private Integer type;

    @ApiModelProperty("1:主流程 2：多轮对话")
    @Range(message = "crm.global.message", min = 1, max = 2)
    private Integer category;

    @ApiModelProperty("分支")
    private String branch;

    @ApiModelProperty("版本号")
    private String version;

    @ApiModelProperty("0:未删除 1:删除")
    private Byte isDelete;

    @ApiModelProperty("创建人")
    private Long createBy;

    @ApiModelProperty("更新人")
    private Long updateBy;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
